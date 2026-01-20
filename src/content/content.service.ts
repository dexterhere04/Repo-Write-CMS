import {
  Injectable,
  ForbiddenException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';
import { ContentStatus, Visibility } from '@prisma/client';
import slugify from 'slugify';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  // ---------------------------------------------
  // Helpers
  // ---------------------------------------------

  private generateSlug(title: string): string {
    const slug = slugify(title, { lower: true, strict: true });
    if (!slug) {
      throw new Error('Failed to generate slug');
    }
    return slug;
  }

  private async ensureUniqueSlug(baseSlug: string): Promise<string> {
    let slug = baseSlug;
    let counter = 1;

    while (true) {
      const existing = await this.prisma.client.contentSlug.findUnique({
        where: { slug },
      });

      if (!existing) break;

      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    return slug;
  }

  private async getLatestVersion(contentId: string) {
    const version = await this.prisma.client.contentVersion.findFirst({
      where: { contentId },
      orderBy: { version: 'desc' },
    });

    if (!version) {
      throw new NotFoundException('No versions found');
    }

    return version;
  }

  private async getLatestStatus(contentId: string) {
    return this.prisma.client.contentStatusHistory.findFirst({
      where: { contentId },
      orderBy: { effectiveAt: 'desc' },
    });
  }

  // ---------------------------------------------
  // Create Content (Draft)
  // ---------------------------------------------

  async createDraft(authorId: string, dto: CreateContentDto) {
    const baseSlug = dto.slug ?? this.generateSlug(dto.title);
    const uniqueSlug = await this.ensureUniqueSlug(baseSlug);

    return this.prisma.client.$transaction(async (tx) => {
      const content = await tx.content.create({
        data: {
          type: dto.type,
          authorId,
          visibility: Visibility.PRIVATE,
        },
      });

      await tx.contentVersion.create({
        data: {
          contentId: content.id,
          title: dto.title,
          summary: dto.summary,
          body: dto.body,
          version: 1,
        },
      });

      await tx.contentSlug.create({
        data: {
          contentId: content.id,
          slug: uniqueSlug,
          isActive: true,
        },
      });

      if (dto.canonicalUrl || dto.seoTitle || dto.seoDescription) {
        await tx.contentSEO.create({
          data: {
            contentId: content.id,
            canonicalUrl: dto.canonicalUrl,
            metaTitle: dto.seoTitle,
            metaDescription: dto.seoDescription,
          },
        });
      }

      await tx.contentStatusHistory.create({
        data: {
          contentId: content.id,
          status: ContentStatus.DRAFT,
          effectiveAt: new Date(),
        },
      });

      return content;
    });
  }

  // ---------------------------------------------
  // Update Content (Creates New Version)
  // ---------------------------------------------

  async updateContent(
    contentId: string,
    userId: string,
    dto: UpdateContentDto,
  ) {
    const content = await this.prisma.client.content.findUnique({
      where: { id: contentId },
    });

    if (!content || content.deletedAt) {
      throw new NotFoundException('Content not found');
    }

    if (content.authorId !== userId) {
      throw new ForbiddenException('Not your content');
    }

    const latestVersion = await this.getLatestVersion(contentId);

    return this.prisma.client.$transaction(async (tx) => {
      if (dto.slug) {
        const baseSlug = this.generateSlug(dto.slug);
        const uniqueSlug = await this.ensureUniqueSlug(baseSlug);

        await tx.contentSlug.updateMany({
          where: { contentId, isActive: true },
          data: { isActive: false },
        });

        await tx.contentSlug.create({
          data: {
            contentId,
            slug: uniqueSlug,
            isActive: true,
          },
        });
      }

      await tx.contentVersion.create({
        data: {
          contentId,
          title: dto.title ?? latestVersion.title,
          summary: dto.summary ?? latestVersion.summary,
          body: dto.body ?? latestVersion.body,
          version: latestVersion.version + 1,
        },
      });

      if (dto.canonicalUrl || dto.seoTitle || dto.seoDescription) {
        await tx.contentSEO.upsert({
          where: { contentId },
          update: {
            canonicalUrl: dto.canonicalUrl,
            metaTitle: dto.seoTitle,
            metaDescription: dto.seoDescription,
          },
          create: {
            contentId,
            canonicalUrl: dto.canonicalUrl,
            metaTitle: dto.seoTitle,
            metaDescription: dto.seoDescription,
          },
        });
      }

      return { success: true };
    });
  }

  // ---------------------------------------------
  // Publish / Unpublish
  // ---------------------------------------------

  async setPublishState(contentId: string, dto: PublishContentDto) {
    const status = dto.publish ? ContentStatus.PUBLISHED : ContentStatus.DRAFT;

    return this.prisma.client.contentStatusHistory.create({
      data: {
        contentId,
        status,
        effectiveAt: new Date(),
      },
    });
  }

  // ---------------------------------------------
  // Visibility
  // ---------------------------------------------

  async setVisibility(contentId: string, dto: SetVisibilityDto) {
    return this.prisma.client.content.update({
      where: { id: contentId },
      data: {
        visibility: dto.visibility,
      },
    });
  }

  // ---------------------------------------------
  // Soft Delete
  // ---------------------------------------------

  async softDelete(contentId: string, userId: string) {
    const content = await this.prisma.client.content.findUnique({
      where: { id: contentId },
    });

    if (!content) {
      throw new NotFoundException('Content not found');
    }

    if (content.authorId !== userId) {
      throw new ForbiddenException('Not your content');
    }

    return this.prisma.client.content.update({
      where: { id: contentId },
      data: { deletedAt: new Date() },
    });
  }

  // ---------------------------------------------
  // Get Public Content by Slug
  // ---------------------------------------------

  async getPublicContentBySlug(slug: string) {
    const contentSlug = await this.prisma.client.contentSlug.findUnique({
      where: { slug },
    });

    if (!contentSlug || !contentSlug.isActive) {
      throw new NotFoundException('Content not found');
    }

    const content = await this.prisma.client.content.findUnique({
      where: { id: contentSlug.contentId },
    });

    if (!content || content.deletedAt) {
      throw new NotFoundException('Content not found');
    }

    const latestStatus = await this.getLatestStatus(content.id);

    if (!latestStatus || latestStatus.status !== ContentStatus.PUBLISHED) {
      throw new NotFoundException('Content not found');
    }

    if (content.visibility !== Visibility.PUBLIC) {
      throw new NotFoundException('Content not found');
    }

    const latestVersion = await this.getLatestVersion(content.id);

    return {
      id: content.id,
      type: content.type,
      title: latestVersion.title,
      summary: latestVersion.summary,
      body: latestVersion.body,
      slug,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
    };
  }
}

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
import slugify from 'slugify';

@Injectable()
export class ContentService {
  constructor(private prisma: PrismaService) {}

  // ---------------------------------------------
  // Helpers
  // ---------------------------------------------

  private generateSlug(title: string): string {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-call
    return slugify(title, { lower: true, strict: true });
  }

  private async ensureUniqueSlug(baseSlug: string): Promise<string> {
    let slug = baseSlug;
    let counter = 1;

    while (
      await this.prisma.client.contentSlug.findUnique({
        where: { slug },
      })
    ) {
      slug = `${baseSlug}-${counter}`;
      counter++;
    }

    return slug;
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
          status: 'DRAFT',
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
      include: { versions: true },
    });

    if (!content || content.deletedAt) {
      throw new NotFoundException('Content not found');
    }

    if (content.authorId !== userId) {
      throw new ForbiddenException('Not your content');
    }

    const latestVersion = Math.max(...content.versions.map((v) => v.version));

    return this.prisma.client.$transaction(async (tx) => {
      if (dto.slug) {
        const uniqueSlug = await this.ensureUniqueSlug(dto.slug);

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
          title: dto.title ?? content.versions[0].title,
          summary: dto.summary,
          body: dto.body ?? content.versions[0].body,
          version: latestVersion + 1,
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
    const status = dto.publish ? 'PUBLISHED' : 'DRAFT';

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
      where: { slug, isActive: true },
    });

    if (!contentSlug) {
      throw new NotFoundException('Content not found');
    }

    const content = await this.prisma.client.content.findUnique({
      where: { id: contentSlug.contentId },
      include: { versions: true },
    });

    if (!content || content.deletedAt) {
      throw new NotFoundException('Content not found');
    }

    // Check if content is published
    const latestStatus =
      await this.prisma.client.contentStatusHistory.findFirst({
        where: { contentId: content.id },
        orderBy: { effectiveAt: 'desc' },
      });

    if (latestStatus?.status !== 'PUBLISHED') {
      throw new NotFoundException('Content not found');
    }

    // Check if content is public
    if (content.visibility !== 'PUBLIC') {
      throw new NotFoundException('Content not found');
    }

    const latestVersion = content.versions.reduce((prev, current) =>
      prev.version > current.version ? prev : current,
    );

    return {
      id: content.id,
      type: content.type,
      title: latestVersion.title,
      summary: latestVersion.summary,
      body: latestVersion.body,
      slug: slug,
      createdAt: content.createdAt,
      updatedAt: content.updatedAt,
    };
  }
}

/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';
import { ContentType, ContentStatus, Visibility } from '@prisma/client';
import { ForbiddenException, NotFoundException } from '@nestjs/common';

// Mock slugify
jest.mock('slugify', () => ({
  __esModule: true,
  default: jest.fn((title: string, options?: any) => {
    if (options?.lower) {
      return title.toLowerCase().replace(/\s+/g, '-');
    }
    return title;
  }),
}));

describe('ContentService', () => {
  let service: ContentService;
  let prismaService: jest.Mocked<PrismaService>;
  const slugify = require('slugify').default;

  beforeEach(async () => {
    const mockPrismaService = {
      content: {
        create: jest.fn(),
        findUnique: jest.fn(),
        update: jest.fn(),
      },
      contentVersion: {
        create: jest.fn(),
        findFirst: jest.fn(),
      },
      contentSlug: {
        findUnique: jest.fn(),
        create: jest.fn(),
        updateMany: jest.fn(),
      },
      contentSEO: {
        create: jest.fn(),
        upsert: jest.fn(),
      },
      contentStatusHistory: {
        create: jest.fn(),
        findFirst: jest.fn(),
      },
      $transaction: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ContentService,
        {
          provide: PrismaService,
          useValue: mockPrismaService,
        },
      ],
    }).compile();

    service = module.get<ContentService>(ContentService);
    prismaService = module.get(PrismaService) as jest.Mocked<PrismaService>;

    jest.clearAllMocks();
  });

  describe('createDraft', () => {
    const createDto: CreateContentDto = {
      title: 'Test Article',
      summary: 'Test summary',
      body: 'Test body content',
      type: ContentType.POST,
      slug: 'custom-slug',
      seoTitle: 'SEO Title',
      seoDescription: 'SEO Description',
      canonicalUrl: 'https://example.com/canonical',
    };

    it('should create draft content with all fields', async () => {
      const mockContent = { id: 'content-id' };

      (prismaService.$transaction as jest.Mock).mockImplementation((callback) =>
        callback(prismaService),
      );
      (prismaService.content.create as jest.Mock).mockResolvedValue(
        mockContent,
      );
      (prismaService.contentSlug.findUnique as jest.Mock).mockResolvedValue(
        null,
      );

      const result = await service.createDraft('author-id', createDto);

      expect(prismaService.content.create).toHaveBeenCalledWith({
        data: {
          type: ContentType.POST,
          authorId: 'author-id',
          visibility: Visibility.PRIVATE,
        },
      });

      expect(prismaService.contentVersion.create).toHaveBeenCalledWith({
        data: {
          contentId: 'content-id',
          title: 'Test Article',
          summary: 'Test summary',
          body: 'Test body content',
          version: 1,
        },
      });

      expect(prismaService.contentSlug.create).toHaveBeenCalledWith({
        data: {
          contentId: 'content-id',
          slug: 'custom-slug',
          isActive: true,
        },
      });

      expect(prismaService.contentSEO.create).toHaveBeenCalledWith({
        data: {
          contentId: 'content-id',
          canonicalUrl: 'https://example.com/canonical',
          metaTitle: 'SEO Title',
          metaDescription: 'SEO Description',
        },
      });

      expect(prismaService.contentStatusHistory.create).toHaveBeenCalledWith({
        data: {
          contentId: 'content-id',
          status: ContentStatus.DRAFT,
          effectiveAt: expect.any(Date),
        },
      });

      expect(result).toEqual(mockContent);
    });

    it('should auto-generate slug when not provided', async () => {
      const dtoWithoutSlug = { ...createDto };
      delete dtoWithoutSlug.slug;

      (prismaService.$transaction as jest.Mock).mockImplementation((callback) =>
        callback(prismaService),
      );
      (prismaService.content.create as jest.Mock).mockResolvedValue({
        id: 'content-id',
      });
      (prismaService.contentSlug.findUnique as jest.Mock).mockResolvedValue(
        null,
      );

      await service.createDraft('author-id', dtoWithoutSlug);

      expect(slugify).toHaveBeenCalledWith('Test Article', {
        lower: true,
        strict: true,
      });
    });

    it('should handle transaction errors', async () => {
      const error = new Error('Transaction failed');
      (prismaService.$transaction as jest.Mock).mockRejectedValue(error);

      await expect(service.createDraft('author-id', createDto)).rejects.toThrow(
        'Transaction failed',
      );
    });
  });

  describe('updateContent', () => {
    const updateDto: UpdateContentDto = {
      title: 'Updated Title',
      summary: 'Updated summary',
      body: 'Updated body',
      slug: 'updated-slug',
      seoTitle: 'Updated SEO Title',
    };

    const mockContent = {
      id: 'content-id',
      authorId: 'author-id',
      deletedAt: null,
    };

    const mockLatestVersion = {
      id: 'version-id',
      version: 2,
      title: 'Old Title',
      summary: 'Old Summary',
      body: 'Old Body',
    };

    it('should update content successfully', async () => {
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(
        mockContent,
      );
      (prismaService.contentVersion.findFirst as jest.Mock).mockResolvedValue(
        mockLatestVersion,
      );

      (prismaService.$transaction as jest.Mock).mockImplementation((callback) =>
        callback(prismaService),
      );
      (prismaService.contentSlug.findUnique as jest.Mock).mockResolvedValue(
        null,
      );

      const result = await service.updateContent(
        'content-id',
        'author-id',
        updateDto,
      );

      expect(result).toEqual({ success: true });
    });

    it('should throw NotFoundException for non-existent content', async () => {
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(
        service.updateContent('content-id', 'author-id', updateDto),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException when user is not author', async () => {
      const otherContent = { ...mockContent, authorId: 'other-author-id' };
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(
        otherContent,
      );

      await expect(
        service.updateContent('content-id', 'author-id', updateDto),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('setPublishState', () => {
    it('should publish content', async () => {
      const publishDto: PublishContentDto = { publish: true };
      const mockStatusHistory = {
        id: 'status-id',
        status: ContentStatus.PUBLISHED,
      };

      (
        prismaService.contentStatusHistory.create as jest.Mock
      ).mockResolvedValue(mockStatusHistory);

      const result = await service.setPublishState('content-id', publishDto);

      expect(result).toEqual(mockStatusHistory);
    });
  });

  describe('setVisibility', () => {
    it('should set content visibility', async () => {
      const visibilityDto: SetVisibilityDto = { visibility: Visibility.PUBLIC };
      const mockContent = { id: 'content-id', visibility: Visibility.PUBLIC };

      (prismaService.content.update as jest.Mock).mockResolvedValue(
        mockContent,
      );

      const result = await service.setVisibility('content-id', visibilityDto);

      expect(result).toEqual(mockContent);
    });
  });

  describe('softDelete', () => {
    const mockContent = {
      id: 'content-id',
      authorId: 'author-id',
    };

    it('should soft delete content', async () => {
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(
        mockContent,
      );
      (prismaService.content.update as jest.Mock).mockResolvedValue({
        deletedAt: new Date(),
      });

      await service.softDelete('content-id', 'author-id');

      expect(prismaService.content.update).toHaveBeenCalledWith({
        where: { id: 'content-id' },
        data: { deletedAt: expect.any(Date) },
      });
    });

    it('should throw NotFoundException for non-existent content', async () => {
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(null);

      await expect(
        service.softDelete('content-id', 'author-id'),
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException when user is not author', async () => {
      const otherContent = { ...mockContent, authorId: 'other-author-id' };
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(
        otherContent,
      );

      await expect(
        service.softDelete('content-id', 'author-id'),
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('getPublicContentBySlug', () => {
    it('should return public content by slug', async () => {
      const mockContentSlug = {
        id: 'slug-id',
        slug: 'test-slug',
        contentId: 'content-id',
        isActive: true,
      };

      const mockContent = {
        id: 'content-id',
        type: ContentType.POST,
        visibility: Visibility.PUBLIC,
        deletedAt: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const mockLatestStatus = {
        id: 'status-id',
        status: ContentStatus.PUBLISHED,
      };

      const mockLatestVersion = {
        id: 'version-id',
        title: 'Test Title',
        summary: 'Test Summary',
        body: 'Test Body',
      };

      (prismaService.contentSlug.findUnique as jest.Mock).mockResolvedValue(
        mockContentSlug,
      );
      (prismaService.content.findUnique as jest.Mock).mockResolvedValue(
        mockContent,
      );
      (
        prismaService.contentStatusHistory.findFirst as jest.Mock
      ).mockResolvedValue(mockLatestStatus);
      (prismaService.contentVersion.findFirst as jest.Mock).mockResolvedValue(
        mockLatestVersion,
      );

      const result = await service.getPublicContentBySlug('test-slug');

      expect(result).toEqual({
        id: 'content-id',
        type: ContentType.POST,
        title: 'Test Title',
        summary: 'Test Summary',
        body: 'Test Body',
        slug: 'test-slug',
        createdAt: mockContent.createdAt,
        updatedAt: mockContent.updatedAt,
      });
    });

    it('should throw NotFoundException for non-existent slug', async () => {
      (prismaService.contentSlug.findUnique as jest.Mock).mockResolvedValue(
        null,
      );

      await expect(
        service.getPublicContentBySlug('non-existent-slug'),
      ).rejects.toThrow(NotFoundException);
    });
  });
});

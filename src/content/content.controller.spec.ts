/* eslint-disable @typescript-eslint/unbound-method */
import { Test, TestingModule } from '@nestjs/testing';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';
import { Visibility } from './enums/visibility.enum';
import { ContentType, ContentStatus } from '@prisma/client';

describe('ContentController', () => {
  let contentController: ContentController;
  let contentService: ContentService;

  const mockUser = {
    id: 'user-id-1',
    role: 'USER',
  };

  const mockContent = {
    id: 'content-id-1',
    type: ContentType.POST,
    visibility: Visibility.PRIVATE,
    createdAt: new Date(),
    updatedAt: new Date(),
    deletedAt: null,
    authorId: 'user-id-1',
  };

  const mockPublicContent = {
    id: 'content-id-1',
    type: ContentType.POST,
    title: 'Test Content',
    summary: 'Test summary',
    body: 'Test body',
    slug: 'test-content',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockStatusHistory = {
    id: 'status-id-1',
    createdAt: new Date(),
    contentId: 'content-id-1',
    status: ContentStatus.PUBLISHED,
    effectiveAt: new Date(),
  };

  const mockRequest = {
    user: mockUser,
  };

  beforeEach(async () => {
    const mockContentService = {
      createDraft: jest.fn(),
      updateContent: jest.fn(),
      softDelete: jest.fn(),
      setPublishState: jest.fn(),
      setVisibility: jest.fn(),
      getPublicContentBySlug: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContentController],
      providers: [
        {
          provide: ContentService,
          useValue: mockContentService,
        },
        PrismaService,
      ],
    }).compile();

    contentController = module.get<ContentController>(ContentController);
    contentService = module.get<ContentService>(ContentService);
  });

  describe('createDraft', () => {
    it('should create a draft successfully', async () => {
      const createContentDto: CreateContentDto = {
        title: 'Test Article',
        body: '# Test Article\n\nThis is test content',
        type: ContentType.POST,
        summary: 'Test summary',
        slug: 'test-article',
      };

      jest.spyOn(contentService, 'createDraft').mockResolvedValue(mockContent);

      const result = await contentController.createDraft(
        mockRequest,
        createContentDto,
      );

      expect(contentService.createDraft).toHaveBeenCalledWith(
        mockUser.id,
        createContentDto,
      );
      expect(result).toEqual(mockContent);
    });

    it('should handle content creation errors', async () => {
      const createContentDto: CreateContentDto = {
        title: 'Test Article',
        body: '# Test Article\n\nThis is test content',
        type: ContentType.POST,
      };

      const error = new Error('Failed to create content');
      jest.spyOn(contentService, 'createDraft').mockRejectedValue(error);

      await expect(
        contentController.createDraft(mockRequest, createContentDto),
      ).rejects.toThrow(error);
    });

    it('should create content without optional fields', async () => {
      const createContentDto: CreateContentDto = {
        title: 'Simple Test',
        body: 'Simple body',
        type: ContentType.PAGE,
      };

      jest.spyOn(contentService, 'createDraft').mockResolvedValue(mockContent);

      const result = await contentController.createDraft(
        mockRequest,
        createContentDto,
      );

      expect(contentService.createDraft).toHaveBeenCalledWith(
        mockUser.id,
        createContentDto,
      );
      expect(result).toEqual(mockContent);
    });
  });

  describe('updateContent', () => {
    it('should update content successfully', async () => {
      const updateContentDto: UpdateContentDto = {
        title: 'Updated Title',
        summary: 'Updated summary',
      };

      const updateResult = { success: true };
      jest
        .spyOn(contentService, 'updateContent')
        .mockResolvedValue(updateResult);

      const result = await contentController.updateContent(
        'content-id-1',
        mockRequest,
        updateContentDto,
      );

      expect(contentService.updateContent).toHaveBeenCalledWith(
        'content-id-1',
        mockUser.id,
        updateContentDto,
      );
      expect(result).toEqual(updateResult);
    });

    it('should update content body', async () => {
      const updateContentDto: UpdateContentDto = {
        body: 'Updated body content',
      };

      const updateResult = { success: true };
      jest
        .spyOn(contentService, 'updateContent')
        .mockResolvedValue(updateResult);

      const result = await contentController.updateContent(
        'content-id-1',
        mockRequest,
        updateContentDto,
      );

      expect(contentService.updateContent).toHaveBeenCalledWith(
        'content-id-1',
        mockUser.id,
        updateContentDto,
      );
      expect(result).toEqual(updateResult);
    });

    it('should update SEO fields', async () => {
      const updateContentDto: UpdateContentDto = {
        seoTitle: 'SEO Title',
        seoDescription: 'SEO Description',
        canonicalUrl: 'https://example.com/canonical',
      };

      const updateResult = { success: true };
      jest
        .spyOn(contentService, 'updateContent')
        .mockResolvedValue(updateResult);

      const result = await contentController.updateContent(
        'content-id-1',
        mockRequest,
        updateContentDto,
      );

      expect(contentService.updateContent).toHaveBeenCalledWith(
        'content-id-1',
        mockUser.id,
        updateContentDto,
      );
      expect(result).toEqual(updateResult);
    });

    it('should handle update errors', async () => {
      const updateContentDto: UpdateContentDto = {
        title: 'Updated Title',
      };

      const error = new Error('Content not found');
      jest.spyOn(contentService, 'updateContent').mockRejectedValue(error);

      await expect(
        contentController.updateContent(
          'invalid-id',
          mockRequest,
          updateContentDto,
        ),
      ).rejects.toThrow(error);
    });
  });

  describe('deleteContent', () => {
    it('should soft delete content successfully', async () => {
      const deletedContent = { ...mockContent, deletedAt: new Date() };
      jest
        .spyOn(contentService, 'softDelete')
        .mockResolvedValue(deletedContent);

      const result = await contentController.deleteContent(
        'content-id-1',
        mockRequest,
      );

      expect(contentService.softDelete).toHaveBeenCalledWith(
        'content-id-1',
        mockUser.id,
      );
      expect(result).toEqual(deletedContent);
    });

    it('should handle delete errors', async () => {
      const error = new Error('Content not found');
      jest.spyOn(contentService, 'softDelete').mockRejectedValue(error);

      await expect(
        contentController.deleteContent('invalid-id', mockRequest),
      ).rejects.toThrow(error);
    });
  });

  describe('publishContent', () => {
    it('should publish content successfully', async () => {
      const publishContentDto: PublishContentDto = {
        publish: true,
      };

      const publishedStatus = mockStatusHistory;
      jest
        .spyOn(contentService, 'setPublishState')
        .mockResolvedValue(publishedStatus);

      const result = await contentController.publishContent(
        'content-id-1',
        publishContentDto,
      );

      expect(contentService.setPublishState).toHaveBeenCalledWith(
        'content-id-1',
        publishContentDto,
      );
      expect(result).toEqual(publishedStatus);
    });

    it('should unpublish content successfully', async () => {
      const publishContentDto: PublishContentDto = {
        publish: false,
      };

      const unpublishedStatus = {
        ...mockStatusHistory,
        status: ContentStatus.DRAFT,
      };
      jest
        .spyOn(contentService, 'setPublishState')
        .mockResolvedValue(unpublishedStatus);

      const result = await contentController.publishContent(
        'content-id-1',
        publishContentDto,
      );

      expect(contentService.setPublishState).toHaveBeenCalledWith(
        'content-id-1',
        publishContentDto,
      );
      expect(result).toEqual(unpublishedStatus);
    });

    it('should handle publish errors', async () => {
      const publishContentDto: PublishContentDto = {
        publish: true,
      };

      const error = new Error('Cannot publish content');
      jest.spyOn(contentService, 'setPublishState').mockRejectedValue(error);

      await expect(
        contentController.publishContent('content-id-1', publishContentDto),
      ).rejects.toThrow(error);
    });
  });

  describe('setVisibility', () => {
    it('should set visibility to PUBLIC', async () => {
      const setVisibilityDto: SetVisibilityDto = {
        visibility: Visibility.PUBLIC,
      };

      const publicContent = { ...mockContent, visibility: Visibility.PUBLIC };
      jest
        .spyOn(contentService, 'setVisibility')
        .mockResolvedValue(publicContent);

      const result = await contentController.setVisibility(
        'content-id-1',
        setVisibilityDto,
      );

      expect(contentService.setVisibility).toHaveBeenCalledWith(
        'content-id-1',
        setVisibilityDto,
      );
      expect(result).toEqual(publicContent);
    });

    it('should set visibility to PRIVATE', async () => {
      const setVisibilityDto: SetVisibilityDto = {
        visibility: Visibility.PRIVATE,
      };

      const privateContent = { ...mockContent, visibility: Visibility.PRIVATE };
      jest
        .spyOn(contentService, 'setVisibility')
        .mockResolvedValue(privateContent);

      const result = await contentController.setVisibility(
        'content-id-1',
        setVisibilityDto,
      );

      expect(contentService.setVisibility).toHaveBeenCalledWith(
        'content-id-1',
        setVisibilityDto,
      );
      expect(result).toEqual(privateContent);
    });

    it('should set visibility to UNLISTED', async () => {
      const setVisibilityDto: SetVisibilityDto = {
        visibility: Visibility.UNLISTED,
      };

      const unlistedContent = {
        ...mockContent,
        visibility: Visibility.UNLISTED,
      };
      jest
        .spyOn(contentService, 'setVisibility')
        .mockResolvedValue(unlistedContent);

      const result = await contentController.setVisibility(
        'content-id-1',
        setVisibilityDto,
      );

      expect(contentService.setVisibility).toHaveBeenCalledWith(
        'content-id-1',
        setVisibilityDto,
      );
      expect(result).toEqual(unlistedContent);
    });

    it('should handle visibility errors', async () => {
      const setVisibilityDto: SetVisibilityDto = {
        visibility: Visibility.PUBLIC,
      };

      const error = new Error('Cannot set visibility');
      jest.spyOn(contentService, 'setVisibility').mockRejectedValue(error);

      await expect(
        contentController.setVisibility('content-id-1', setVisibilityDto),
      ).rejects.toThrow(error);
    });
  });

  describe('getBySlug', () => {
    it('should get public content by slug', async () => {
      const slug = 'test-article';
      jest
        .spyOn(contentService, 'getPublicContentBySlug')
        .mockResolvedValue(mockPublicContent);

      const result = await contentController.getBySlug(slug);

      expect(contentService.getPublicContentBySlug).toHaveBeenCalledWith(slug);
      expect(result).toEqual(mockPublicContent);
    });

    it('should handle not found slug', async () => {
      const slug = 'non-existent-article';
      const error = new Error('Content not found');
      jest
        .spyOn(contentService, 'getPublicContentBySlug')
        .mockRejectedValue(error);

      await expect(contentController.getBySlug(slug)).rejects.toThrow(error);
    });

    it('should handle slug with special characters', async () => {
      const slug = 'test-article-with-special-chars-123';
      jest
        .spyOn(contentService, 'getPublicContentBySlug')
        .mockResolvedValue(mockPublicContent);

      const result = await contentController.getBySlug(slug);

      expect(contentService.getPublicContentBySlug).toHaveBeenCalledWith(slug);
      expect(result).toEqual(mockPublicContent);
    });
  });
});

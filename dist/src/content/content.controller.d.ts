import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';
export declare class ContentController {
    private readonly contentService;
    constructor(contentService: ContentService);
    createDraft(req: unknown, dto: CreateContentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    updateContent(id: string, req: unknown, dto: UpdateContentDto): Promise<{
        success: boolean;
    }>;
    deleteContent(id: string, req: unknown): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    publishContent(id: string, dto: PublishContentDto): Promise<{
        id: string;
        createdAt: Date;
        contentId: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        effectiveAt: Date;
    }>;
    setVisibility(id: string, dto: SetVisibilityDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    getBySlug(slug: string): Promise<{
        id: string;
        type: import("@prisma/client").$Enums.ContentType;
        title: string;
        summary: string | null;
        body: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }>;
}

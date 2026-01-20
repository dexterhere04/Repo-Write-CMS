import { PrismaService } from '../prisma/prisma.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';
export declare class ContentService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateSlug;
    private ensureUniqueSlug;
    private getLatestVersion;
    private getLatestStatus;
    createDraft(authorId: string, dto: CreateContentDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    updateContent(contentId: string, userId: string, dto: UpdateContentDto): Promise<{
        success: boolean;
    }>;
    setPublishState(contentId: string, dto: PublishContentDto): Promise<{
        id: string;
        createdAt: Date;
        contentId: string;
        status: import("@prisma/client").$Enums.ContentStatus;
        effectiveAt: Date;
    }>;
    setVisibility(contentId: string, dto: SetVisibilityDto): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    softDelete(contentId: string, userId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        type: import("@prisma/client").$Enums.ContentType;
        visibility: import("@prisma/client").$Enums.Visibility;
        authorId: string;
    }>;
    getPublicContentBySlug(slug: string): Promise<{
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

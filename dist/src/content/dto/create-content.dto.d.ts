import { ContentType } from '@prisma/client';
export declare class CreateContentDto {
    title: string;
    summary?: string;
    body: string;
    slug?: string;
    type: ContentType;
    canonicalUrl?: string;
    seoTitle?: string;
    seoDescription?: string;
    coverImageUrl?: string;
}

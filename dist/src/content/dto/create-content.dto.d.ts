import { ContentType } from '../../../generated/prisma/enums';
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

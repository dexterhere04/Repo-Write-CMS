import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  MaxLength,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { ContentType } from '../../../generated/prisma/enums';

/**
 * DTO for creating new content (always created as DRAFT)
 */
export class CreateContentDto {
  @ApiProperty({ example: 'My First Blog Post' })
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  title: string;

  @ApiPropertyOptional({ example: 'Short summary of the article' })
  @IsOptional()
  @IsString()
  @MaxLength(500)
  summary?: string;

  @ApiProperty({ example: '# Hello world\nThis is markdown.' })
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiPropertyOptional({ example: 'my-first-blog-post' })
  @IsOptional()
  @IsString()
  slug?: string;

  @ApiProperty({ enum: ContentType })
  @IsEnum(ContentType)
  type: ContentType;

  // SEO

  @ApiPropertyOptional({ example: 'https://originalsite.com/my-post' })
  @IsOptional()
  @IsUrl()
  canonicalUrl?: string;

  @ApiPropertyOptional({ example: 'My SEO Title' })
  @IsOptional()
  @IsString()
  @MaxLength(60)
  seoTitle?: string;

  @ApiPropertyOptional({ example: 'This is the meta description.' })
  @IsOptional()
  @IsString()
  @MaxLength(160)
  seoDescription?: string;

  // Media

  @ApiPropertyOptional({ example: 'https://cdn.site.com/image.png' })
  @IsOptional()
  @IsUrl()
  coverImageUrl?: string;
}

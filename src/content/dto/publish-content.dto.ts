import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

/**
 * DTO for publishing / unpublishing content
 */
export class PublishContentDto {
  @ApiProperty({ example: true })
  @IsBoolean()
  publish: boolean;
}

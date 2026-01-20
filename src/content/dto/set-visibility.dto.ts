import { IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Visibility } from '../enums/visibility.enum';

export class SetVisibilityDto {
  @ApiProperty({ enum: Visibility })
  @IsEnum(Visibility)
  visibility: `${Visibility}`;
}

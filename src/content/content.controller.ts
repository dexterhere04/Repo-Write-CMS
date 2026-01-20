import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ContentService } from './content.service';
import { CreateContentDto } from './dto/create-content.dto';
import { UpdateContentDto } from './dto/update-content.dto';
import { PublishContentDto } from './dto/publish-content.dto';
import { SetVisibilityDto } from './dto/set-visibility.dto';

import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { OwnershipGuard } from './guards/ownership.guard';
import { getAuthUser } from '../auth/util/get-auth-user';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  createDraft(@Req() req: unknown, @Body() dto: CreateContentDto) {
    const user = getAuthUser(req);
    return this.contentService.createDraft(user.id, dto);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  updateContent(
    @Param('id') id: string,
    @Req() req: unknown,
    @Body() dto: UpdateContentDto,
  ) {
    const user = getAuthUser(req);
    return this.contentService.updateContent(id, user.id, dto);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  deleteContent(@Param('id') id: string, @Req() req: unknown) {
    const user = getAuthUser(req);
    return this.contentService.softDelete(id, user.id);
  }

  @Post(':id/publish')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  publishContent(@Param('id') id: string, @Body() dto: PublishContentDto) {
    return this.contentService.setPublishState(id, dto);
  }

  @Post(':id/visibility')
  @UseGuards(JwtAuthGuard, OwnershipGuard)
  setVisibility(@Param('id') id: string, @Body() dto: SetVisibilityDto) {
    return this.contentService.setVisibility(id, dto);
  }

  @Get('slug/:slug')
  getBySlug(@Param('slug') slug: string) {
    return this.contentService.getPublicContentBySlug(slug);
  }
}

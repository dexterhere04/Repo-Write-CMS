import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  UseGuards,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../auth/guards/jwt.guard';
import { GithubService } from './github.service';

interface AuthenticatedUser {
  id: string;
}

interface AuthenticatedRequest extends Request {
  user: AuthenticatedUser;
}

@Controller('github')
export class GithubController {
  constructor(private githubService: GithubService) {}

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getMe(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;
    const isGithubUser = await this.githubService.isUserGithubUser(userId);
    const hasToken = !!(await this.githubService.getUserGithubToken(userId));

    return {
      isGithubUser,
      hasGithubToken: isGithubUser && hasToken,
    };
  }

  @Get('repos')
  @UseGuards(JwtAuthGuard)
  async getUserRepos(@Req() req: AuthenticatedRequest) {
    const userId = req.user.id;
    const token = await this.githubService.getUserGithubToken(userId);

    if (!token) {
      throw new NotFoundException(
        'GitHub account not connected. Please login with GitHub to access your repositories.',
      );
    }

    return this.githubService.fetchUserRepos(token);
  }

  @Get('repos/public/:username')
  async getPublicRepos(@Param('username') username: string) {
    return this.githubService.fetchPublicRepos(username);
  }

  @Get('readme/:repo')
  @UseGuards(JwtAuthGuard)
  async getReadme(
    @Req() req: AuthenticatedRequest,
    @Param('repo') repo: string,
  ) {
    const userId = req.user.id;
    const token = await this.githubService.getUserGithubToken(userId);

    if (!token) {
      throw new NotFoundException('GitHub account not connected');
    }

    const content = await this.githubService.fetchReadme(token, repo);
    return { content };
  }

  @Get('readme/public/:username/:repo')
  async getPublicReadme(
    @Param('username') username: string,
    @Param('repo') repo: string,
  ) {
    const fullName = `${username}/${repo}`;
    const content = await this.githubService.fetchReadme(null, fullName);
    return { content };
  }

  @Post('generate-blog/:repo')
  @UseGuards(JwtAuthGuard)
  async generateBlog(
    @Req() req: AuthenticatedRequest,
    @Param('repo') repo: string,
    @Body() body: { isPublic?: boolean } | null,
  ) {
    const userId = req.user.id;
    let token: string | null = null;

    if (!body?.isPublic) {
      token = await this.githubService.getUserGithubToken(userId);
      if (!token) {
        throw new NotFoundException('GitHub account not connected');
      }
    }

    const analysis = await this.githubService.analyzeRepo(token, repo);
    const blog = await this.githubService.generateAIBlog(
      analysis,
      repo.split('/').pop() || repo,
      repo,
      null,
    );

    return blog;
  }

  @Post('generate-blog/public/:username/:repo')
  async generateBlogPublic(
    @Param('username') username: string,
    @Param('repo') repo: string,
  ) {
    const fullName = `${username}/${repo}`;
    const analysis = await this.githubService.analyzeRepo(null, fullName);
    const blog = await this.githubService.generateAIBlog(
      analysis,
      repo,
      fullName,
      null,
    );

    return blog;
  }
}

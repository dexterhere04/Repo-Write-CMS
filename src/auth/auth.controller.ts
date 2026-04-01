import {
  Controller,
  Post,
  Body,
  Get,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import type { Response } from 'express';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';

interface GitHubRequest {
  user: {
    githubId: string;
    username: string;
    email?: string;
    avatarUrl?: string;
    accessToken?: string;
  };
}

@Controller('auth')
export class AuthController {
  private readonly frontendUrl =
    process.env.FRONTEND_URL || 'http://localhost:3001';

  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto) {
    return this.authService.registerUser(dto.name, dto.email, dto.password);
  }

  @Post('login')
  login(@Body() dto: LoginDto) {
    return this.authService.loginUser(dto.identifier, dto.password);
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  githubLogin() {
    // Redirects to GitHub
  }

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() req: GitHubRequest, @Res() res: Response) {
    try {
      const result = await this.authService.handleGithubLogin(req.user);
      const redirectUrl = `${this.frontendUrl}/auth/callback?token=${encodeURIComponent(result.accessToken)}&isGithubUser=true`;
      return res.redirect(redirectUrl);
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Authentication failed';
      const redirectUrl = `${this.frontendUrl}/auth/callback?error=${encodeURIComponent(errorMessage)}`;
      return res.redirect(redirectUrl);
    }
  }
}

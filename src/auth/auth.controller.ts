import { Controller, Post, Body, Get, Req, UseGuards } from '@nestjs/common';
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
  };
}

@Controller('auth')
export class AuthController {
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
  githubCallback(@Req() req: GitHubRequest) {
    return this.authService.handleGithubLogin(req.user);
  }
}

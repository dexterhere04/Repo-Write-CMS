import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID || 'mock-client-id',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'mock-client-secret',
      callbackURL:
        process.env.GITHUB_CALLBACK_URL ||
        'http://localhost:3000/auth/github/callback',
    });
  }

  validate(
    accessToken: string,
    refreshToken: string,
    profile: { id: string; username: string },
  ) {
    return {
      githubId: profile.id,
      username: profile.username,
      accessToken,
    };
  }
}

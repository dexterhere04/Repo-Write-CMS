import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID || 'mock-client-id',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || 'mock-client-secret',
      callbackURL:
        process.env.GITHUB_CALLBACK_URL ||
        'http://localhost:3000/auth/github/callback',
      scope: ['user:email'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: Profile) {
    let email = profile.emails?.[0]?.value;

    // If email not in profile (private email), fetch from GitHub API
    if (!email) {
      try {
        const response = await fetch('https://api.github.com/user/emails', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/vnd.github+json',
            'User-Agent': 'Repo-Write-CMS',
          },
        });
        if (response.ok) {
          const emails = (await response.json()) as Array<{
            email: string;
            primary: boolean;
            verified: boolean;
          }>;
          const primaryEmail = emails.find((e) => e.primary && e.verified);
          email = primaryEmail?.email || emails[0]?.email;
        }
      } catch {
        // Ignore fetch errors, will fail later with "Email required" message
      }
    }

    const avatarUrl = profile.photos?.[0]?.value;

    return {
      githubId: profile.id,
      username: profile.username,
      email,
      avatarUrl,
      accessToken,
    };
  }
}

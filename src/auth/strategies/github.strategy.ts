import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, Profile } from 'passport-github2';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  private readonly logger = new Logger(GithubStrategy.name);

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
    this.logger.log(`GitHub profile received: ${JSON.stringify(profile)}`);
    let email = profile.emails?.[0]?.value;

    // If email not in profile (private email), fetch from GitHub API
    if (!email) {
      this.logger.log('No email in profile, fetching from GitHub API...');
      try {
        const response = await fetch('https://api.github.com/user/emails', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            Accept: 'application/vnd.github+json',
            'User-Agent': 'Repo-Write-CMS',
          },
        });
        this.logger.log(`GitHub emails API response status: ${response.status}`);
        if (response.ok) {
          const emails = (await response.json()) as Array<{
            email: string;
            primary: boolean;
            verified: boolean;
          }>;
          this.logger.log(`GitHub emails: ${JSON.stringify(emails)}`);
          const primaryEmail = emails.find((e) => e.primary && e.verified);
          email = primaryEmail?.email || emails[0]?.email;
        } else {
          const errorText = await response.text();
          this.logger.error(`GitHub API error: ${errorText}`);
        }
      } catch (error) {
        this.logger.error(`Fetch error: ${error}`);
      }
    }

    const avatarUrl = profile.photos?.[0]?.value;

    this.logger.log(`Final email: ${email}, avatarUrl: ${avatarUrl}`);
    return {
      githubId: profile.id,
      username: profile.username,
      email,
      avatarUrl,
      accessToken,
    };
  }
}

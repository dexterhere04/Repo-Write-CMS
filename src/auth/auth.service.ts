import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async registerUser(name: string, email: string, password: string) {
    const passwordHash = await bcrypt.hash(password, 12);
    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        passwordHash,
      },
    });
    return this.createJWT(user.id);
  }

  async validateUser(identifier: string, password: string) {
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ name: identifier }, { email: identifier }],
      },
    });
    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const isValid = await bcrypt.compare(password, user.passwordHash);

    if (!isValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }

  async loginUser(identifier: string, password: string) {
    const user = await this.validateUser(identifier, password);
    return this.createJWT(user.id);
  }

  createJWT(userId: string) {
    return {
      accessToken: this.jwtService.sign({
        sub: userId,
      }),
    };
  }

  async handleGithubLogin(profile: {
    githubId: string;
    username: string;
    email?: string;
    avatarUrl?: string;
    accessToken?: string;
  }) {
    const existingAccount = await this.prisma.oAuthAccount.findUnique({
      where: {
        provider_providerId: {
          provider: 'github',
          providerId: profile.githubId,
        },
      },
      include: { user: true },
    });

    if (existingAccount) {
      await this.prisma.oAuthAccount.update({
        where: { id: existingAccount.id },
        data: { accessToken: profile.accessToken },
      });
      return {
        ...this.createJWT(existingAccount.user.id),
        isGithubUser: true,
      };
    }

    if (!profile.email) {
      throw new UnauthorizedException(
        'Email is required for GitHub registration',
      );
    }

    const user = await this.prisma.user.create({
      data: {
        name: profile.username,
        email: profile.email,
        avatarUrl: profile.avatarUrl,
        oauthAccounts: {
          create: {
            provider: 'github',
            providerId: profile.githubId,
            accessToken: profile.accessToken,
          },
        },
      },
    });
    return {
      ...this.createJWT(user.id),
      isGithubUser: true,
    };
  }

  async getUserGithubToken(userId: string): Promise<string | null> {
    const account = await this.prisma.oAuthAccount.findFirst({
      where: {
        userId,
        provider: 'github',
      },
    });
    return account?.accessToken ?? null;
  }

  async isUserGithubUser(userId: string): Promise<boolean> {
    const account = await this.prisma.oAuthAccount.findFirst({
      where: {
        userId,
        provider: 'github',
      },
    });
    return !!account;
  }
}

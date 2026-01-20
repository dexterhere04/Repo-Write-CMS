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
  }) {
    let user = await this.prisma.user.findFirst({
      where: {
        oauthAccounts: {
          some: {
            provider: 'github',
            providerId: profile.githubId,
          },
        },
      },
    });

    if (!user) {
      if (!profile.email) {
        throw new UnauthorizedException(
          'Email is required for GitHub registration',
        );
      }

      user = await this.prisma.user.create({
        data: {
          name: profile.username,
          email: profile.email,
          avatarUrl: profile.avatarUrl,
          oauthAccounts: {
            create: {
              provider: 'github',
              providerId: profile.githubId,
            },
          },
        },
      });
    }
    return this.createJWT(user.id);
  }
}

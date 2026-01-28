import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

interface RequestWithCookies {
  cookies?: {
    token?: string;
  };
  headers?: {
    authorization?: string;
  };
}
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private prisma: PrismaService) {
    super({
      jwtFromRequest: (req: RequestWithCookies) =>
        req.cookies?.token ||
        req.headers?.authorization?.replace('Bearer ', '') ||
        null,
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET || 'dev-secret',
    });
  }

  async validate(payload: { sub: string }) {
    const user = await this.prisma.user.findUnique({
      where: { id: payload.sub },
      include: {
        roles: {
          include: {
            role: true,
          },
        },
      },
    });

    if (!user) {
      return null;
    }

    // Transform user to include role property for compatibility
    const transformedUser = {
      ...user,
      role: user.roles.length > 0 ? user.roles[0].role.name : 'READER', // Default role
    };

    return transformedUser;
  }
}

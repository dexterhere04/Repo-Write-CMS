import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    registerUser(name: string, email: string, password: string): Promise<{
        accessToken: string;
    }>;
    validateUser(identifier: string, password: string): Promise<{
        id: string;
        email: string;
        passwordHash: string | null;
        name: string | null;
        avatarUrl: string | null;
        isActive: boolean;
        lastLoginAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
    }>;
    loginUser(identifier: string, password: string): Promise<{
        accessToken: string;
    }>;
    createJWT(userId: string): {
        accessToken: string;
    };
    handleGithubLogin(profile: {
        githubId: string;
        username: string;
        email?: string;
        avatarUrl?: string;
    }): Promise<{
        accessToken: string;
    }>;
}

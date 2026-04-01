import type { Response } from 'express';
import { AuthService } from './auth.service';
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
export declare class AuthController {
    private authService;
    private readonly frontendUrl;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    githubLogin(): void;
    githubCallback(req: GitHubRequest, res: Response): Promise<void>;
}
export {};

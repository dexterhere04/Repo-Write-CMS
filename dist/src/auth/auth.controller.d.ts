import { AuthService } from './auth.service';
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
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        accessToken: string;
    }>;
    login(dto: LoginDto): Promise<{
        accessToken: string;
    }>;
    githubLogin(): void;
    githubCallback(req: GitHubRequest): Promise<{
        accessToken: string;
    }>;
}
export {};

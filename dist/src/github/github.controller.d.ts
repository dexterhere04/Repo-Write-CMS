import { Request } from 'express';
import { GithubService } from './github.service';
interface AuthenticatedUser {
    id: string;
}
interface AuthenticatedRequest extends Request {
    user: AuthenticatedUser;
}
export declare class GithubController {
    private githubService;
    constructor(githubService: GithubService);
    getMe(req: AuthenticatedRequest): Promise<{
        isGithubUser: boolean;
        hasGithubToken: boolean;
    }>;
    getUserRepos(req: AuthenticatedRequest): Promise<import("./github.service").GithubRepo[]>;
    getPublicRepos(username: string): Promise<import("./github.service").GithubRepo[]>;
    getReadme(req: AuthenticatedRequest, repo: string): Promise<{
        content: string;
    }>;
    getPublicReadme(username: string, repo: string): Promise<{
        content: string;
    }>;
    generateBlog(req: AuthenticatedRequest, repo: string, body: {
        isPublic?: boolean;
    } | null): Promise<import("./github.service").GeneratedBlog>;
    generateBlogPublic(username: string, repo: string): Promise<import("./github.service").GeneratedBlog>;
}
export {};

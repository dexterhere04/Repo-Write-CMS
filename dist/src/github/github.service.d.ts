import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
export interface GithubRepo {
    id: number;
    full_name: string;
    name: string;
    description: string | null;
    private: boolean;
}
export interface RepoAnalysis {
    readme: string | null;
    packageJson: Record<string, unknown> | null;
    techStack: string[];
    structure: string[];
    commits: CommitInfo[];
    sourceFiles: SourceFile[];
}
export interface SourceFile {
    path: string;
    content: string;
}
export interface CommitInfo {
    sha: string;
    message: string;
    date: string;
    author: string;
}
export interface GeneratedBlog {
    title: string;
    body: string;
    summary: string;
    slug: string;
}
export declare class GithubService {
    private prisma;
    private configService;
    private openai;
    constructor(prisma: PrismaService, configService: ConfigService);
    getUserGithubToken(userId: string): Promise<string | null>;
    isUserGithubUser(userId: string): Promise<boolean>;
    fetchUserRepos(token: string): Promise<GithubRepo[]>;
    fetchPublicRepos(username: string): Promise<GithubRepo[]>;
    fetchReadme(token: string | null, fullName: string): Promise<string>;
    analyzeRepo(token: string | null, fullName: string): Promise<RepoAnalysis>;
    private identifyKeyFiles;
    private detectTechStack;
    generateAIBlog(analysis: RepoAnalysis, repoName: string, repoFullName: string, description: string | null): Promise<GeneratedBlog>;
    private summarizeCommits;
    private formatDate;
    private sanitizeReadme;
    private describeStructure;
    private formatSourceFiles;
    private getLanguageFromExtension;
    private generateSlug;
}

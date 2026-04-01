"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubController = void 0;
const common_1 = require("@nestjs/common");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const github_service_1 = require("./github.service");
let GithubController = class GithubController {
    githubService;
    constructor(githubService) {
        this.githubService = githubService;
    }
    async getMe(req) {
        const userId = req.user.id;
        const isGithubUser = await this.githubService.isUserGithubUser(userId);
        const hasToken = !!(await this.githubService.getUserGithubToken(userId));
        return {
            isGithubUser,
            hasGithubToken: isGithubUser && hasToken,
        };
    }
    async getUserRepos(req) {
        const userId = req.user.id;
        const token = await this.githubService.getUserGithubToken(userId);
        if (!token) {
            throw new common_1.NotFoundException('GitHub account not connected. Please login with GitHub to access your repositories.');
        }
        return this.githubService.fetchUserRepos(token);
    }
    async getPublicRepos(username) {
        return this.githubService.fetchPublicRepos(username);
    }
    async getReadme(req, repo) {
        const userId = req.user.id;
        const token = await this.githubService.getUserGithubToken(userId);
        if (!token) {
            throw new common_1.NotFoundException('GitHub account not connected');
        }
        const content = await this.githubService.fetchReadme(token, repo);
        return { content };
    }
    async getPublicReadme(username, repo) {
        const fullName = `${username}/${repo}`;
        const content = await this.githubService.fetchReadme(null, fullName);
        return { content };
    }
    async generateBlog(req, repo, body) {
        const userId = req.user.id;
        let token = null;
        if (!body?.isPublic) {
            token = await this.githubService.getUserGithubToken(userId);
            if (!token) {
                throw new common_1.NotFoundException('GitHub account not connected');
            }
        }
        const analysis = await this.githubService.analyzeRepo(token, repo);
        const blog = await this.githubService.generateAIBlog(analysis, repo.split('/').pop() || repo, repo, null);
        return blog;
    }
    async generateBlogPublic(username, repo) {
        const fullName = `${username}/${repo}`;
        const analysis = await this.githubService.analyzeRepo(null, fullName);
        const blog = await this.githubService.generateAIBlog(analysis, repo, fullName, null);
        return blog;
    }
};
exports.GithubController = GithubController;
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "getMe", null);
__decorate([
    (0, common_1.Get)('repos'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "getUserRepos", null);
__decorate([
    (0, common_1.Get)('repos/public/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "getPublicRepos", null);
__decorate([
    (0, common_1.Get)('readme/:repo'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "getReadme", null);
__decorate([
    (0, common_1.Get)('readme/public/:username/:repo'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "getPublicReadme", null);
__decorate([
    (0, common_1.Post)('generate-blog/:repo'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Param)('repo')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, Object]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "generateBlog", null);
__decorate([
    (0, common_1.Post)('generate-blog/public/:username/:repo'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Param)('repo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GithubController.prototype, "generateBlogPublic", null);
exports.GithubController = GithubController = __decorate([
    (0, common_1.Controller)('github'),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], GithubController);
//# sourceMappingURL=github.controller.js.map
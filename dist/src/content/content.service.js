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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const client_1 = require("@prisma/client");
const slugify_1 = __importDefault(require("slugify"));
let ContentService = class ContentService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateSlug(title) {
        const slug = (0, slugify_1.default)(title, { lower: true, strict: true });
        if (!slug) {
            throw new Error('Failed to generate slug');
        }
        return slug;
    }
    async ensureUniqueSlug(baseSlug) {
        let slug = baseSlug;
        let counter = 1;
        while (true) {
            const existing = await this.prisma.contentSlug.findUnique({
                where: { slug },
            });
            if (!existing)
                break;
            slug = `${baseSlug}-${counter}`;
            counter++;
        }
        return slug;
    }
    async getLatestVersion(contentId) {
        const version = await this.prisma.contentVersion.findFirst({
            where: { contentId },
            orderBy: { version: 'desc' },
        });
        if (!version) {
            throw new common_1.NotFoundException('No versions found');
        }
        return version;
    }
    async getLatestStatus(contentId) {
        return this.prisma.contentStatusHistory.findFirst({
            where: { contentId },
            orderBy: { effectiveAt: 'desc' },
        });
    }
    async createDraft(authorId, dto) {
        const baseSlug = dto.slug ?? this.generateSlug(dto.title);
        const uniqueSlug = await this.ensureUniqueSlug(baseSlug);
        return this.prisma.$transaction(async (tx) => {
            const content = await tx.content.create({
                data: {
                    type: dto.type,
                    authorId,
                    visibility: client_1.Visibility.PRIVATE,
                },
            });
            await tx.contentVersion.create({
                data: {
                    contentId: content.id,
                    title: dto.title,
                    summary: dto.summary,
                    body: dto.body,
                    version: 1,
                },
            });
            await tx.contentSlug.create({
                data: {
                    contentId: content.id,
                    slug: uniqueSlug,
                    isActive: true,
                },
            });
            if (dto.canonicalUrl || dto.seoTitle || dto.seoDescription) {
                await tx.contentSEO.create({
                    data: {
                        contentId: content.id,
                        canonicalUrl: dto.canonicalUrl,
                        metaTitle: dto.seoTitle,
                        metaDescription: dto.seoDescription,
                    },
                });
            }
            await tx.contentStatusHistory.create({
                data: {
                    contentId: content.id,
                    status: client_1.ContentStatus.DRAFT,
                    effectiveAt: new Date(),
                },
            });
            return content;
        });
    }
    async updateContent(contentId, userId, dto) {
        const content = await this.prisma.content.findUnique({
            where: { id: contentId },
        });
        if (!content || content.deletedAt) {
            throw new common_1.NotFoundException('Content not found');
        }
        if (content.authorId !== userId) {
            throw new common_1.ForbiddenException('Not your content');
        }
        const latestVersion = await this.getLatestVersion(contentId);
        return this.prisma.$transaction(async (tx) => {
            if (dto.slug) {
                const baseSlug = this.generateSlug(dto.slug);
                const uniqueSlug = await this.ensureUniqueSlug(baseSlug);
                await tx.contentSlug.updateMany({
                    where: { contentId, isActive: true },
                    data: { isActive: false },
                });
                await tx.contentSlug.create({
                    data: {
                        contentId,
                        slug: uniqueSlug,
                        isActive: true,
                    },
                });
            }
            await tx.contentVersion.create({
                data: {
                    contentId,
                    title: dto.title ?? latestVersion.title,
                    summary: dto.summary ?? latestVersion.summary,
                    body: dto.body ?? latestVersion.body,
                    version: latestVersion.version + 1,
                },
            });
            if (dto.canonicalUrl || dto.seoTitle || dto.seoDescription) {
                await tx.contentSEO.upsert({
                    where: { contentId },
                    update: {
                        canonicalUrl: dto.canonicalUrl,
                        metaTitle: dto.seoTitle,
                        metaDescription: dto.seoDescription,
                    },
                    create: {
                        contentId,
                        canonicalUrl: dto.canonicalUrl,
                        metaTitle: dto.seoTitle,
                        metaDescription: dto.seoDescription,
                    },
                });
            }
            return { success: true };
        });
    }
    async setPublishState(contentId, dto) {
        const status = dto.publish ? client_1.ContentStatus.PUBLISHED : client_1.ContentStatus.DRAFT;
        return this.prisma.contentStatusHistory.create({
            data: {
                contentId,
                status,
                effectiveAt: new Date(),
            },
        });
    }
    async setVisibility(contentId, dto) {
        return this.prisma.content.update({
            where: { id: contentId },
            data: {
                visibility: dto.visibility,
            },
        });
    }
    async softDelete(contentId, userId) {
        const content = await this.prisma.content.findUnique({
            where: { id: contentId },
        });
        if (!content) {
            throw new common_1.NotFoundException('Content not found');
        }
        if (content.authorId !== userId) {
            throw new common_1.ForbiddenException('Not your content');
        }
        return this.prisma.content.update({
            where: { id: contentId },
            data: { deletedAt: new Date() },
        });
    }
    async getPublicContentBySlug(slug) {
        const contentSlug = await this.prisma.contentSlug.findUnique({
            where: { slug },
        });
        if (!contentSlug || !contentSlug.isActive) {
            throw new common_1.NotFoundException('Content not found');
        }
        const content = await this.prisma.content.findUnique({
            where: { id: contentSlug.contentId },
        });
        if (!content || content.deletedAt) {
            throw new common_1.NotFoundException('Content not found');
        }
        const latestStatus = await this.getLatestStatus(content.id);
        if (!latestStatus || latestStatus.status !== client_1.ContentStatus.PUBLISHED) {
            throw new common_1.NotFoundException('Content not found');
        }
        if (content.visibility !== client_1.Visibility.PUBLIC) {
            throw new common_1.NotFoundException('Content not found');
        }
        const latestVersion = await this.getLatestVersion(content.id);
        return {
            id: content.id,
            type: content.type,
            title: latestVersion.title,
            summary: latestVersion.summary,
            body: latestVersion.body,
            slug,
            createdAt: content.createdAt,
            updatedAt: content.updatedAt,
        };
    }
};
exports.ContentService = ContentService;
exports.ContentService = ContentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], ContentService);
//# sourceMappingURL=content.service.js.map
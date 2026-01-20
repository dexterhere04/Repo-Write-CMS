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
exports.ContentController = void 0;
const common_1 = require("@nestjs/common");
const content_service_1 = require("./content.service");
const create_content_dto_1 = require("./dto/create-content.dto");
const update_content_dto_1 = require("./dto/update-content.dto");
const publish_content_dto_1 = require("./dto/publish-content.dto");
const set_visibility_dto_1 = require("./dto/set-visibility.dto");
const jwt_guard_1 = require("../auth/guards/jwt.guard");
const ownership_guard_1 = require("./guards/ownership.guard");
const get_auth_user_1 = require("../auth/util/get-auth-user");
let ContentController = class ContentController {
    contentService;
    constructor(contentService) {
        this.contentService = contentService;
    }
    createDraft(req, dto) {
        const user = (0, get_auth_user_1.getAuthUser)(req);
        return this.contentService.createDraft(user.id, dto);
    }
    updateContent(id, req, dto) {
        const user = (0, get_auth_user_1.getAuthUser)(req);
        return this.contentService.updateContent(id, user.id, dto);
    }
    deleteContent(id, req) {
        const user = (0, get_auth_user_1.getAuthUser)(req);
        return this.contentService.softDelete(id, user.id);
    }
    publishContent(id, dto) {
        return this.contentService.setPublishState(id, dto);
    }
    setVisibility(id, dto) {
        return this.contentService.setVisibility(id, dto);
    }
    getBySlug(slug) {
        return this.contentService.getPublicContentBySlug(slug);
    }
};
exports.ContentController = ContentController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_content_dto_1.CreateContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "createDraft", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, update_content_dto_1.UpdateContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "updateContent", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "deleteContent", null);
__decorate([
    (0, common_1.Post)(':id/publish'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, publish_content_dto_1.PublishContentDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "publishContent", null);
__decorate([
    (0, common_1.Post)(':id/visibility'),
    (0, common_1.UseGuards)(jwt_guard_1.JwtAuthGuard, ownership_guard_1.OwnershipGuard),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, set_visibility_dto_1.SetVisibilityDto]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "setVisibility", null);
__decorate([
    (0, common_1.Get)('slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ContentController.prototype, "getBySlug", null);
exports.ContentController = ContentController = __decorate([
    (0, common_1.Controller)('content'),
    __metadata("design:paramtypes", [content_service_1.ContentService])
], ContentController);
//# sourceMappingURL=content.controller.js.map
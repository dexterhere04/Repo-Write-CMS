"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.ViewEventScalarFieldEnum = exports.LikeScalarFieldEnum = exports.CommentScalarFieldEnum = exports.ContentTagScalarFieldEnum = exports.TagScalarFieldEnum = exports.ContentSEOScalarFieldEnum = exports.ContentSlugScalarFieldEnum = exports.ContentStatusHistoryScalarFieldEnum = exports.ContentVersionScalarFieldEnum = exports.ContentScalarFieldEnum = exports.LoginAttemptScalarFieldEnum = exports.SessionScalarFieldEnum = exports.OAuthAccountScalarFieldEnum = exports.UserRoleScalarFieldEnum = exports.RoleScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.2.0",
    engine: "0c8ef2ce45c83248ab3df073180d5eda9e8be7a3"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    OAuthAccount: 'OAuthAccount',
    Session: 'Session',
    LoginAttempt: 'LoginAttempt',
    Content: 'Content',
    ContentVersion: 'ContentVersion',
    ContentStatusHistory: 'ContentStatusHistory',
    ContentSlug: 'ContentSlug',
    ContentSEO: 'ContentSEO',
    Tag: 'Tag',
    ContentTag: 'ContentTag',
    Comment: 'Comment',
    Like: 'Like',
    ViewEvent: 'ViewEvent'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    email: 'email',
    passwordHash: 'passwordHash',
    name: 'name',
    avatarUrl: 'avatarUrl',
    isActive: 'isActive',
    lastLoginAt: 'lastLoginAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.RoleScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.UserRoleScalarFieldEnum = {
    userId: 'userId',
    roleId: 'roleId'
};
exports.OAuthAccountScalarFieldEnum = {
    id: 'id',
    provider: 'provider',
    providerId: 'providerId',
    userId: 'userId'
};
exports.SessionScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    expiresAt: 'expiresAt',
    createdAt: 'createdAt'
};
exports.LoginAttemptScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    email: 'email',
    ipAddress: 'ipAddress',
    success: 'success',
    createdAt: 'createdAt'
};
exports.ContentScalarFieldEnum = {
    id: 'id',
    type: 'type',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.ContentVersionScalarFieldEnum = {
    id: 'id',
    contentId: 'contentId',
    title: 'title',
    summary: 'summary',
    body: 'body',
    version: 'version',
    createdAt: 'createdAt'
};
exports.ContentStatusHistoryScalarFieldEnum = {
    id: 'id',
    contentId: 'contentId',
    status: 'status',
    effectiveAt: 'effectiveAt',
    createdAt: 'createdAt'
};
exports.ContentSlugScalarFieldEnum = {
    id: 'id',
    contentId: 'contentId',
    slug: 'slug',
    isActive: 'isActive',
    createdAt: 'createdAt'
};
exports.ContentSEOScalarFieldEnum = {
    id: 'id',
    contentId: 'contentId',
    metaTitle: 'metaTitle',
    metaDescription: 'metaDescription',
    canonicalUrl: 'canonicalUrl'
};
exports.TagScalarFieldEnum = {
    id: 'id',
    name: 'name'
};
exports.ContentTagScalarFieldEnum = {
    contentId: 'contentId',
    tagId: 'tagId'
};
exports.CommentScalarFieldEnum = {
    id: 'id',
    body: 'body',
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deletedAt: 'deletedAt'
};
exports.LikeScalarFieldEnum = {
    userId: 'userId',
    contentId: 'contentId',
    createdAt: 'createdAt'
};
exports.ViewEventScalarFieldEnum = {
    id: 'id',
    contentId: 'contentId',
    userId: 'userId',
    sessionId: 'sessionId',
    ipHash: 'ipHash',
    userAgent: 'userAgent',
    referrer: 'referrer',
    createdAt: 'createdAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map
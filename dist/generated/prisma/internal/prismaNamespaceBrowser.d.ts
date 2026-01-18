import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly User: "User";
    readonly Role: "Role";
    readonly UserRole: "UserRole";
    readonly OAuthAccount: "OAuthAccount";
    readonly Session: "Session";
    readonly LoginAttempt: "LoginAttempt";
    readonly Content: "Content";
    readonly ContentVersion: "ContentVersion";
    readonly ContentStatusHistory: "ContentStatusHistory";
    readonly ContentSlug: "ContentSlug";
    readonly ContentSEO: "ContentSEO";
    readonly Tag: "Tag";
    readonly ContentTag: "ContentTag";
    readonly Comment: "Comment";
    readonly Like: "Like";
    readonly ViewEvent: "ViewEvent";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly name: "name";
    readonly avatarUrl: "avatarUrl";
    readonly isActive: "isActive";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const RoleScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum];
export declare const UserRoleScalarFieldEnum: {
    readonly userId: "userId";
    readonly roleId: "roleId";
};
export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum];
export declare const OAuthAccountScalarFieldEnum: {
    readonly id: "id";
    readonly provider: "provider";
    readonly providerId: "providerId";
    readonly userId: "userId";
};
export type OAuthAccountScalarFieldEnum = (typeof OAuthAccountScalarFieldEnum)[keyof typeof OAuthAccountScalarFieldEnum];
export declare const SessionScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly ipAddress: "ipAddress";
    readonly userAgent: "userAgent";
    readonly expiresAt: "expiresAt";
    readonly createdAt: "createdAt";
};
export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum];
export declare const LoginAttemptScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly email: "email";
    readonly ipAddress: "ipAddress";
    readonly success: "success";
    readonly createdAt: "createdAt";
};
export type LoginAttemptScalarFieldEnum = (typeof LoginAttemptScalarFieldEnum)[keyof typeof LoginAttemptScalarFieldEnum];
export declare const ContentScalarFieldEnum: {
    readonly id: "id";
    readonly type: "type";
    readonly authorId: "authorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type ContentScalarFieldEnum = (typeof ContentScalarFieldEnum)[keyof typeof ContentScalarFieldEnum];
export declare const ContentVersionScalarFieldEnum: {
    readonly id: "id";
    readonly contentId: "contentId";
    readonly title: "title";
    readonly summary: "summary";
    readonly body: "body";
    readonly version: "version";
    readonly createdAt: "createdAt";
};
export type ContentVersionScalarFieldEnum = (typeof ContentVersionScalarFieldEnum)[keyof typeof ContentVersionScalarFieldEnum];
export declare const ContentStatusHistoryScalarFieldEnum: {
    readonly id: "id";
    readonly contentId: "contentId";
    readonly status: "status";
    readonly effectiveAt: "effectiveAt";
    readonly createdAt: "createdAt";
};
export type ContentStatusHistoryScalarFieldEnum = (typeof ContentStatusHistoryScalarFieldEnum)[keyof typeof ContentStatusHistoryScalarFieldEnum];
export declare const ContentSlugScalarFieldEnum: {
    readonly id: "id";
    readonly contentId: "contentId";
    readonly slug: "slug";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
};
export type ContentSlugScalarFieldEnum = (typeof ContentSlugScalarFieldEnum)[keyof typeof ContentSlugScalarFieldEnum];
export declare const ContentSEOScalarFieldEnum: {
    readonly id: "id";
    readonly contentId: "contentId";
    readonly metaTitle: "metaTitle";
    readonly metaDescription: "metaDescription";
    readonly canonicalUrl: "canonicalUrl";
};
export type ContentSEOScalarFieldEnum = (typeof ContentSEOScalarFieldEnum)[keyof typeof ContentSEOScalarFieldEnum];
export declare const TagScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
};
export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum];
export declare const ContentTagScalarFieldEnum: {
    readonly contentId: "contentId";
    readonly tagId: "tagId";
};
export type ContentTagScalarFieldEnum = (typeof ContentTagScalarFieldEnum)[keyof typeof ContentTagScalarFieldEnum];
export declare const CommentScalarFieldEnum: {
    readonly id: "id";
    readonly body: "body";
    readonly userId: "userId";
    readonly contentId: "contentId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly deletedAt: "deletedAt";
};
export type CommentScalarFieldEnum = (typeof CommentScalarFieldEnum)[keyof typeof CommentScalarFieldEnum];
export declare const LikeScalarFieldEnum: {
    readonly userId: "userId";
    readonly contentId: "contentId";
    readonly createdAt: "createdAt";
};
export type LikeScalarFieldEnum = (typeof LikeScalarFieldEnum)[keyof typeof LikeScalarFieldEnum];
export declare const ViewEventScalarFieldEnum: {
    readonly id: "id";
    readonly contentId: "contentId";
    readonly userId: "userId";
    readonly sessionId: "sessionId";
    readonly ipHash: "ipHash";
    readonly userAgent: "userAgent";
    readonly referrer: "referrer";
    readonly createdAt: "createdAt";
};
export type ViewEventScalarFieldEnum = (typeof ViewEventScalarFieldEnum)[keyof typeof ViewEventScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

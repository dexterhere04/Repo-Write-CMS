export declare const ContentType: {
    readonly POST: "POST";
    readonly PAGE: "PAGE";
    readonly README: "README";
    readonly CHANGELOG: "CHANGELOG";
};
export type ContentType = (typeof ContentType)[keyof typeof ContentType];
export declare const ContentStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly SCHEDULED: "SCHEDULED";
    readonly ARCHIVED: "ARCHIVED";
};
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];
export declare const RoleName: {
    readonly ADMIN: "ADMIN";
    readonly EDITOR: "EDITOR";
    readonly AUTHOR: "AUTHOR";
    readonly READER: "READER";
};
export type RoleName = (typeof RoleName)[keyof typeof RoleName];

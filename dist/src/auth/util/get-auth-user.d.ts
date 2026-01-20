interface AuthUser {
    id: string;
    role: string;
}
export declare function getAuthUser(req: unknown): AuthUser;
export {};

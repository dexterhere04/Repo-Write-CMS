import { Strategy } from 'passport-github2';
declare const GithubStrategy_base: new (...args: [options: import("passport-github2").StrategyOptionsWithRequest] | [options: import("passport-github2").StrategyOptions]) => Strategy & {
    validate(...args: any[]): unknown;
};
export declare class GithubStrategy extends GithubStrategy_base {
    constructor();
    validate(accessToken: string, refreshToken: string, profile: {
        id: string;
        username: string;
    }): {
        githubId: string;
        username: string;
        accessToken: string;
    };
}
export {};

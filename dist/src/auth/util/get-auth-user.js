"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuthUser = getAuthUser;
const common_1 = require("@nestjs/common");
function isAuthUser(value) {
    return (typeof value === 'object' &&
        value !== null &&
        'id' in value &&
        'role' in value &&
        typeof value.id === 'string' &&
        typeof value.role === 'string');
}
function getAuthUser(req) {
    if (typeof req === 'object' && req !== null && 'user' in req) {
        const user = req.user;
        if (isAuthUser(user)) {
            return user;
        }
    }
    throw new common_1.UnauthorizedException('Invalid auth context');
}
//# sourceMappingURL=get-auth-user.js.map
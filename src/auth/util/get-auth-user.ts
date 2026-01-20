import { UnauthorizedException } from '@nestjs/common';

interface AuthUser {
  id: string;
  role: string;
}

function isAuthUser(value: unknown): value is AuthUser {
  return (
    typeof value === 'object' &&
    value !== null &&
    'id' in value &&
    'role' in value &&
    typeof (value as Record<string, unknown>).id === 'string' &&
    typeof (value as Record<string, unknown>).role === 'string'
  );
}

export function getAuthUser(req: unknown): AuthUser {
  if (typeof req === 'object' && req !== null && 'user' in req) {
    const user = (req as Record<string, unknown>).user;

    if (isAuthUser(user)) {
      return user;
    }
  }

  throw new UnauthorizedException('Invalid auth context');
}

import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Role } from '../../auth/enums/role.enum';

@Injectable()
export class OwnershipGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<{
      user?: { id: string; role: Role };
      params: { id: string };
    }>();
    const user = request.user;
    const contentId = request.params.id;

    if (!user) {
      throw new ForbiddenException('User not authenticated');
    }

    if (user.role == Role.ADMIN) {
      return true;
    }

    const content = await this.prisma.content.findUnique({
      where: { id: contentId },
    });

    if (!content) {
      throw new ForbiddenException('Content not found');
    }

    if (content.authorId !== user.id) {
      throw new ForbiddenException('You do not own this content');
    }

    return true;
  }
}

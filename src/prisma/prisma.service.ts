import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
@Injectable()
export class PrismaService implements OnModuleInit {
  readonly client = new PrismaClient();

  async onModuleInit() {
    await this.client.$connect();
  }
}

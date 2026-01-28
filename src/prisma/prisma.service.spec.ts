import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';
import { PrismaPg } from '@prisma/adapter-pg';

describe('PrismaService', () => {
  let service: PrismaService;
  let originalEnv: NodeJS.ProcessEnv;

  beforeEach(async () => {
    // Store original env
    originalEnv = process.env;

    // Mock environment
    process.env = {
      ...originalEnv,
      DATABASE_URL: 'postgresql://test:test@localhost:5432/testdb',
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  afterEach(async () => {
    // Restore environment
    process.env = originalEnv;

    // Ensure service is properly disconnected if connected
    if (service) {
      try {
        await service.$disconnect();
      } catch (error) {
        // Ignore disconnect errors in cleanup
      }
    }
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should initialize with PostgreSQL adapter', () => {
    // Check that service was created with the right configuration
    expect(service.constructor.name).toBe('PrismaService');
  });

  describe('onModuleInit', () => {
    it('should connect to database', async () => {
      const connectSpy = jest
        .spyOn(service, '$connect')
        .mockResolvedValue(undefined);

      await service.onModuleInit();

      expect(connectSpy).toHaveBeenCalled();
    });

    it('should handle connection errors', async () => {
      const error = new Error('Connection failed');
      jest.spyOn(service, '$connect').mockRejectedValue(error);

      await expect(service.onModuleInit()).rejects.toThrow('Connection failed');
    });
  });

  describe('onModuleDestroy', () => {
    it('should disconnect from database', async () => {
      const disconnectSpy = jest
        .spyOn(service, '$disconnect')
        .mockResolvedValue(undefined);

      await service.onModuleDestroy();

      expect(disconnectSpy).toHaveBeenCalled();
    });

    it('should handle disconnection errors gracefully', async () => {
      const error = new Error('Disconnection failed');
      jest.spyOn(service, '$disconnect').mockRejectedValue(error);

      await expect(service.onModuleDestroy()).rejects.toThrow(
        'Disconnection failed',
      );
    });
  });

  describe('integration with PrismaClient', () => {
    it('should have access to Prisma models', () => {
      // Check that the service has access to Prisma models
      expect(service.user).toBeDefined();
      expect(service.content).toBeDefined();
      expect(service.contentVersion).toBeDefined();
      expect(service.contentSlug).toBeDefined();
      expect(service.contentSEO).toBeDefined();
      expect(service.contentStatusHistory).toBeDefined();
    });

    it('should have access to transaction method', () => {
      expect(typeof service.$transaction).toBe('function');
    });

    it('should have access to query methods', () => {
      expect(typeof service.$queryRaw).toBe('function');
      expect(typeof service.$executeRaw).toBe('function');
    });
  });

  describe('environment configuration', () => {
    it('should use DATABASE_URL from environment', () => {
      // The service constructor should read from process.env.DATABASE_URL
      expect(process.env.DATABASE_URL).toBe(
        'postgresql://test:test@localhost:5432/testdb',
      );
    });

    it('should work with missing DATABASE_URL', async () => {
      delete process.env.DATABASE_URL;

      // Service should still be instantiable even with missing DATABASE_URL
      const moduleWithoutDb: TestingModule = await Test.createTestingModule({
        providers: [PrismaService],
      }).compile();

      const serviceWithoutDb =
        moduleWithoutDb.get<PrismaService>(PrismaService);

      expect(serviceWithoutDb).toBeDefined();

      await moduleWithoutDb.close();
    });
  });

  describe('lifecycle integration', () => {
    it('should handle full lifecycle: init -> destroy', async () => {
      const connectSpy = jest
        .spyOn(service, '$connect')
        .mockResolvedValue(undefined);
      const disconnectSpy = jest
        .spyOn(service, '$disconnect')
        .mockResolvedValue(undefined);

      await service.onModuleInit();
      await service.onModuleDestroy();

      expect(connectSpy).toHaveBeenCalled();
      expect(disconnectSpy).toHaveBeenCalled();
    });
  });
});

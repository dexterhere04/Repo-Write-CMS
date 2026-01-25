import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('root endpoint', () => {
    it('should return hello message', () => {
      const expectedMessage = 'Hello World!';
      jest.spyOn(appService, 'getHello').mockReturnValue(expectedMessage);

      expect(appController.getHello()).toBe(expectedMessage);
    });

    it('should call AppService.getHello', () => {
      const spy = jest.spyOn(appService, 'getHello').mockReturnValue('test');
      appController.getHello();
      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('health check', () => {
    it('should return healthy status', () => {
      const result = appController.healthCheck();
      expect(result).toEqual({ status: 'healthy' });
    });

    it('should return status as string', () => {
      const result = appController.healthCheck();
      expect(typeof result.status).toBe('string');
      expect(result.status).toBe('healthy');
    });
  });
});

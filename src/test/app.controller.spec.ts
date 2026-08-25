import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../app/app.controller';
import { AppService } from '../../src/services/app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root route returns with a welcome message ', () => {
    it('should return a message that equals the expected"', () => {
      const result = appController.getHello()
      const expectedMessage = "Welcome to BikeBin™"
      expect(result).toBe(expectedMessage);
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { BikeController } from '../bike/bike.controller';
import { BikeService } from '../bike/bike.service';
import {BIKE_REPOSITORY, } from "../../constants/index"
import { DatabaseModule } from '../db/database.module';

describe('AppController', () => {
    let bikeController: BikeController;
  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule],
      controllers: [BikeController],
      providers: [BikeService],
    }).compile();

    bikeController = app.get<BikeController>(BikeController);
  });
// @TODO: This failing test!
  describe('api/v1/bike @get returns with a ', () => {
    it('should return a message that equals the expected"', () => {
      const result = bikeController.findAll()
      const expectedMessage = []
      expect(result).toBe(expectedMessage);
    });
  });
});

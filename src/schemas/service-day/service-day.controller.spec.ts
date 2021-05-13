import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDayController } from './service-day.controller';

describe('ServiceDayController', () => {
  let controller: ServiceDayController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceDayController],
    }).compile();

    controller = module.get<ServiceDayController>(ServiceDayController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

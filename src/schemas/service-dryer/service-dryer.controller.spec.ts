import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDryerController } from './service-dryer.controller';

describe('ServiceDryerController', () => {
  let controller: ServiceDryerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServiceDryerController],
    }).compile();

    controller = module.get<ServiceDryerController>(ServiceDryerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

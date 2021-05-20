import { Test, TestingModule } from '@nestjs/testing';
import { KioskapiController } from './kioskapi.controller';

describe('KioskapiController', () => {
  let controller: KioskapiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KioskapiController],
    }).compile();

    controller = module.get<KioskapiController>(KioskapiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

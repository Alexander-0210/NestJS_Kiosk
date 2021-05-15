import { Test, TestingModule } from '@nestjs/testing';
import { KioskIncomeController } from './kiosk-income.controller';

describe('KioskIncomeController', () => {
  let controller: KioskIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KioskIncomeController],
    }).compile();

    controller = module.get<KioskIncomeController>(KioskIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

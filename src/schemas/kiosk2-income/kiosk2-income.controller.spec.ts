import { Test, TestingModule } from '@nestjs/testing';
import { Kiosk2IncomeController } from './kiosk2-income.controller';

describe('Kiosk2IncomeController', () => {
  let controller: Kiosk2IncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Kiosk2IncomeController],
    }).compile();

    controller = module.get<Kiosk2IncomeController>(Kiosk2IncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

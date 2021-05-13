import { Test, TestingModule } from '@nestjs/testing';
import { CreditIncomeController } from './credit-income.controller';

describe('CreditIncomeController', () => {
  let controller: CreditIncomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CreditIncomeController],
    }).compile();

    controller = module.get<CreditIncomeController>(CreditIncomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

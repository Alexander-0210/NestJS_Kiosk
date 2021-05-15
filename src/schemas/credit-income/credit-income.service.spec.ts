import { Test, TestingModule } from '@nestjs/testing';
import { CreditIncomeService } from './credit-income.service';

describe('CreditIncomeService', () => {
  let service: CreditIncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditIncomeService],
    }).compile();

    service = module.get<CreditIncomeService>(CreditIncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { Kiosk2IncomeService } from './kiosk2-income.service';

describe('Kiosk2IncomeService', () => {
  let service: Kiosk2IncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Kiosk2IncomeService],
    }).compile();

    service = module.get<Kiosk2IncomeService>(Kiosk2IncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

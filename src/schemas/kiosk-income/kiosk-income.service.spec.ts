import { Test, TestingModule } from '@nestjs/testing';
import { KioskIncomeService } from './kiosk-income.service';

describe('KioskIncomeService', () => {
  let service: KioskIncomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KioskIncomeService],
    }).compile();

    service = module.get<KioskIncomeService>(KioskIncomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

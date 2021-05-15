import { Test, TestingModule } from '@nestjs/testing';
import { SupplyTransactionService } from './supply-transaction.service';

describe('SupplyTransactionService', () => {
  let service: SupplyTransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SupplyTransactionService],
    }).compile();

    service = module.get<SupplyTransactionService>(SupplyTransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

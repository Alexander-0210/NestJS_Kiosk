import { Test, TestingModule } from '@nestjs/testing';
import { HomeBankService } from './home-bank.service';

describe('HomeBankService', () => {
  let service: HomeBankService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeBankService],
    }).compile();

    service = module.get<HomeBankService>(HomeBankService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

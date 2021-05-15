import { Test, TestingModule } from '@nestjs/testing';
import { HomeBankStateService } from './home-bank-state.service';

describe('HomeBankStateService', () => {
  let service: HomeBankStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeBankStateService],
    }).compile();

    service = module.get<HomeBankStateService>(HomeBankStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

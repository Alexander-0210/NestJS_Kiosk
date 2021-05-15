import { Test, TestingModule } from '@nestjs/testing';
import { WashFoldService } from './wash-fold.service';

describe('WashFoldService', () => {
  let service: WashFoldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WashFoldService],
    }).compile();

    service = module.get<WashFoldService>(WashFoldService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

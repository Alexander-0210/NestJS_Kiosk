import { Test, TestingModule } from '@nestjs/testing';
import { ProgramCateService } from './program-cate.service';

describe('ProgramCateService', () => {
  let service: ProgramCateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProgramCateService],
    }).compile();

    service = module.get<ProgramCateService>(ProgramCateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

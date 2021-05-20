import { Test, TestingModule } from '@nestjs/testing';
import { PrivacypolicyService } from './privacypolicy.service';

describe('PrivacypolicyService', () => {
  let service: PrivacypolicyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrivacypolicyService],
    }).compile();

    service = module.get<PrivacypolicyService>(PrivacypolicyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

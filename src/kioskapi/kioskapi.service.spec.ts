import { Test, TestingModule } from '@nestjs/testing';
import { KioskapiService } from './kioskapi.service';

describe('KioskapiService', () => {
  let service: KioskapiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KioskapiService],
    }).compile();

    service = module.get<KioskapiService>(KioskapiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

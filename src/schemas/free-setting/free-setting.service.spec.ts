import { Test, TestingModule } from '@nestjs/testing';
import { FreeSettingService } from './free-setting.service';

describe('FreeSettingService', () => {
  let service: FreeSettingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FreeSettingService],
    }).compile();

    service = module.get<FreeSettingService>(FreeSettingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDryerService } from './service-dryer.service';

describe('ServiceDryerService', () => {
  let service: ServiceDryerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceDryerService],
    }).compile();

    service = module.get<ServiceDryerService>(ServiceDryerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

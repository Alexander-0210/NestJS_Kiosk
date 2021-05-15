import { Test, TestingModule } from '@nestjs/testing';
import { ServiceDayService } from './service-day.service';

describe('ServiceDayService', () => {
  let service: ServiceDayService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServiceDayService],
    }).compile();

    service = module.get<ServiceDayService>(ServiceDayService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

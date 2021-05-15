import { Test, TestingModule } from '@nestjs/testing';
import { JobFinishedService } from './job-finished.service';

describe('JobFinishedService', () => {
  let service: JobFinishedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobFinishedService],
    }).compile();

    service = module.get<JobFinishedService>(JobFinishedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

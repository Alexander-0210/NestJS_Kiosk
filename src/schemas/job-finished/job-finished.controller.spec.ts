import { Test, TestingModule } from '@nestjs/testing';
import { JobFinishedController } from './job-finished.controller';

describe('JobFinishedController', () => {
  let controller: JobFinishedController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobFinishedController],
    }).compile();

    controller = module.get<JobFinishedController>(JobFinishedController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

import { Module } from '@nestjs/common';
import { JobFinishedController } from './job-finished.controller';
import { JobFinishedService } from './job-finished.service';

@Module({
  controllers: [JobFinishedController],
  providers: [JobFinishedService]
})
export class JobFinishedModule {}

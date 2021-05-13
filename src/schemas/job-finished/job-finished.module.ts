import { Module } from '@nestjs/common';
import { JobFinishedController } from './job-finished.controller';

@Module({
  controllers: [JobFinishedController]
})
export class JobFinishedModule {}

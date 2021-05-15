import { Module } from '@nestjs/common';
import { JobFinishedController } from './job-finished.controller';
import { JobFinishedService } from './job-finished.service';

import { MongooseModule } from '@nestjs/mongoose';
import { JobFinishedSchema, JobFinished } from './schema/job-finished.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: JobFinished.name, schema: JobFinishedSchema }])],
  controllers: [JobFinishedController],
  providers: [JobFinishedService],
  exports:[JobFinishedService]
})
export class JobFinishedModule {}

import { Module } from '@nestjs/common';
import { DaysController } from './days.controller';
import { DaysService } from './days.service';

import { MongooseModule } from '@nestjs/mongoose';
import { DaysSchema, Days } from './schema/days.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Days.name, schema: DaysSchema }])],
  controllers: [DaysController],
  providers: [DaysService],
  exports: [DaysService]
})
export class DaysModule {}

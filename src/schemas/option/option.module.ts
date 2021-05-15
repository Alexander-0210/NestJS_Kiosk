import { Module } from '@nestjs/common';
import { OptionController } from './option.controller';
import { OptionService } from './option.service';

import { MongooseModule } from '@nestjs/mongoose';
import { OptionSchema, Option } from './schema/option.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Option.name, schema: OptionSchema }])],
  controllers: [OptionController],
  providers: [OptionService],
  exports:[OptionService]
})
export class OptionModule {}

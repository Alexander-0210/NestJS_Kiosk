import { Module } from '@nestjs/common';
import { SpecialController } from './special.controller';
import { SpecialService } from './special.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SpecialSchema, Special } from './schema/special.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Special.name, schema: SpecialSchema }])],
  controllers: [SpecialController],
  providers: [SpecialService],
  exports:[SpecialService]
})
export class SpecialModule {}

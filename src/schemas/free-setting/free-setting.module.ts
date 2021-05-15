import { Module } from '@nestjs/common';
import { FreeSettingController } from './free-setting.controller';
import { FreeSettingService } from './free-setting.service';

import { MongooseModule } from '@nestjs/mongoose';
import { FreeSettingSchema, FreeSetting } from './schema/free-setting.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: FreeSetting.name, schema: FreeSettingSchema }])],
  controllers: [FreeSettingController],
  providers: [FreeSettingService],
  exports: [FreeSettingService]
})
export class FreeSettingModule {}

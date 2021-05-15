import { Module } from '@nestjs/common';
import { SettingController } from './setting.controller';
import { SettingService } from './setting.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SettingSchema, Setting } from './schema/setting.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Setting.name, schema: SettingSchema }])],
  controllers: [SettingController],
  providers: [SettingService],  
  exports:[SettingService]
})
export class SettingModule {}

import { Module } from '@nestjs/common';
import { FreeSettingController } from './free-setting.controller';

@Module({
  controllers: [FreeSettingController]
})
export class FreeSettingModule {}

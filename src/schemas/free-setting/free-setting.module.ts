import { Module } from '@nestjs/common';
import { FreeSettingController } from './free-setting.controller';
import { FreeSettingService } from './free-setting.service';

@Module({
  controllers: [FreeSettingController],
  providers: [FreeSettingService]
})
export class FreeSettingModule {}

import { Module } from '@nestjs/common';

import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';


import { UserModule } from 'src/schemas/user/user.module';
import { SettingModule } from 'src/schemas/setting/setting.module';
import { KioskIncomeModule } from 'src/schemas/kiosk-income/kiosk-income.module';

@Module({
    controllers: [CmsController],
    imports:[UserModule, SettingModule, KioskIncomeModule],
    providers:[CmsService]
})
export class CmsModule {}

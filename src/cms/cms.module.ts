import { Module } from '@nestjs/common';

import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';
import { CMSKioskIncome, CMSUser, CMSKioskIncomeSchema, CMSUserSchema} from './schema/cms.schema';

import { UserModule } from 'src/schemas/user/user.module';
import { SettingModule } from 'src/schemas/setting/setting.module';
import { KioskIncomeModule } from 'src/schemas/kiosk-income/kiosk-income.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({ 
    imports:
    [MongooseModule.forFeature([{ name: 'kiosk_income', schema: CMSKioskIncomeSchema },
    { name: 'user', schema: CMSUserSchema }]),
     UserModule, SettingModule, KioskIncomeModule],
    controllers: [CmsController],
    providers:[CmsService]
})
export class CmsModule {}

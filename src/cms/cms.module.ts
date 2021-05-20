import { Module } from '@nestjs/common';

import { CmsController } from './cms.controller';
import { CmsService } from './cms.service';

import { UserModule } from 'src/schemas/user/user.module';
import { SettingModule } from 'src/schemas/setting/setting.module';
import { KioskIncomeModule } from 'src/schemas/kiosk-income/kiosk-income.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Kiosk2IncomeModule } from 'src/schemas/kiosk2-income/kiosk2-income.module';
import { CreditIncomeModule } from 'src/schemas/credit-income/credit-income.module';
import { TransactionModule } from 'src/schemas/transaction/transaction.module';
import { WashFoldModule } from 'src/schemas/wash-fold/wash-fold.module';
import { SupplyTransactionModule } from 'src/schemas/supply-transaction/supply-transaction.module';
import { HomeBankModule } from 'src/schemas/home-bank/home-bank.module';
import { PromotionModule } from 'src/schemas/promotion/promotion.module';
import { SpecialModule } from 'src/schemas/special/special.module';
import { FreeSettingModule } from 'src/schemas/free-setting/free-setting.module';
import { ModelModule } from 'src/schemas/model/model.module';
import { ProgramModule } from 'src/schemas/program/program.module';
import { ServiceModule } from 'src/schemas/service/service.module';
import { ServiceDryerModule } from 'src/schemas/service-dryer/service-dryer.module';
import { DaysModule } from 'src/schemas/days/days.module';
import { OptionModule } from 'src/schemas/option/option.module';
import { SoapModule } from 'src/schemas/soap/soap.module';
import { MachineModule } from 'src/schemas/machine/machine.module';
import { JobModule } from 'src/schemas/job/job.module';
import { SupplyModule } from 'src/schemas/supply/supply.module';

@Module({ 
    imports:
    [// MongooseModule.forFeature([{ name: 'kiosk_income', schema: CMSKioskIncomeSchema },
    // { name: 'user', schema: CMSUserSchema }]),
     UserModule, SettingModule, KioskIncomeModule, Kiosk2IncomeModule, CreditIncomeModule,
     TransactionModule, WashFoldModule, SupplyTransactionModule, HomeBankModule,PromotionModule,
     SpecialModule, FreeSettingModule, ModelModule, ProgramModule, ServiceModule, ServiceDryerModule,
     DaysModule, OptionModule, SoapModule, MachineModule, JobModule, SupplyModule,
    ],
    controllers: [CmsController],
    providers:[CmsService]
})
export class CmsModule {}

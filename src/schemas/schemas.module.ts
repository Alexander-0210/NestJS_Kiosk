import { Module } from '@nestjs/common';
import { RouterModule, Routes } from 'nest-router';
import { CatsModule } from './cats/cats.module';
import { SchemasController } from './schemas.controller';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';
import { CreditIncomeModule } from './credit-income/credit-income.module';
import { DaysModule } from './days/days.module';
import { FreeSettingModule } from './free-setting/free-setting.module';
import { HomeBankModule } from './home-bank/home-bank.module';
import { HomeBankStateModule } from './home-bank-state/home-bank-state.module';
import { JobModule } from './job/job.module';
import { JobFinishedModule } from './job-finished/job-finished.module';
import { KioskIncomeModule } from './kiosk-income/kiosk-income.module';
import { Kiosk2IncomeModule } from './kiosk2-income/kiosk2-income.module';
import { LogModule } from './log/log.module';
import { MachineModule } from './machine/machine.module';
import { MachineTypeModule } from './machine-type/machine-type.module';
import { ModelModule } from './model/model.module';
import { OptionModule } from './option/option.module';
import { ProgramModule } from './program/program.module';
import { ProgramCateModule } from './program-cate/program-cate.module';
import { ServiceModule } from './service/service.module';
import { ServiceDayModule } from './service-day/service-day.module';
import { ServiceDryerModule } from './service-dryer/service-dryer.module';
import { SettingModule } from './setting/setting.module';
import { SmsModule } from './sms/sms.module';
import { SoapModule } from './soap/soap.module';
import { SpecialModule } from './special/special.module';
import { SupplyTransactionModule } from './supply-transaction/supply-transaction.module';
import { TrackModule } from './track/track.module';
import { TransactionModule } from './transaction/transaction.module';
import { UserVerifyModule } from './user-verify/user-verify.module';
import { WashFoldModule } from './wash-fold/wash-fold.module';
const routes:Routes = [
    {
        path:'schemas',
        children:[
            {
                path:'/',
                module: UserModule
            },  
            {
                path:'/',
                module: CatsModule
            },  
            {
                path:'/',
                module: AdminModule
            },  
            {
                path:'/',
                module: CreditIncomeModule
            },  
            {
                path:'/',
                module: DaysModule
            },  
            {
                path:'/',
                module: FreeSettingModule
            },  
            {
                path:'/',
                module: HomeBankModule
            },  
            {
                path:'/',
                module: HomeBankStateModule
            },  
            {
                path:'/',
                module: JobModule
            },  
            {
                path:'/',
                module: JobFinishedModule
            },  
            {
                path:'/',
                module: KioskIncomeModule
            },  
            {
                path:'/',
                module: Kiosk2IncomeModule
            },  
            {
                path:'/',
                module: LogModule
            },  
            {
                path:'/',
                module: MachineModule
            },  
            {
                path:'/',
                module: MachineTypeModule
            },  
            {
                path:'/',
                module: ModelModule
            },  
            {
                path:'/',
                module: OptionModule
            },  
            {
                path:'/',
                module: ProgramModule
            },  
            {
                path:'/',
                module: ProgramCateModule
            },  
            {
                path:'/',
                module: ServiceModule
            },  
            {
                path:'/',
                module: ServiceDayModule
            },  
            {
                path:'/',
                module: ServiceDryerModule
            },  
            {
                path:'/',
                module: SettingModule
            },  
            {
                path:'/',
                module: SmsModule
            },  
            {
                path:'/',
                module: SoapModule
            },  
            {
                path:'/',
                module: SpecialModule
            },  
            {
                path:'/',
                module: SupplyTransactionModule
            },  
            {
                path:'/',
                module: TrackModule
            },  
            {
                path:'/',
                module: TransactionModule
            },  
            {
                path:'/',
                module: UserVerifyModule
            },  
            {
                path:'/',
                module: WashFoldModule
            }
        ]
    }
]

@Module({
    imports:[ RouterModule.forRoutes(routes), 
        CatsModule, UserModule, AdminModule, CreditIncomeModule, DaysModule, FreeSettingModule, 
        HomeBankModule,HomeBankStateModule,JobModule,JobFinishedModule,KioskIncomeModule,Kiosk2IncomeModule,
        LogModule,MachineModule,MachineTypeModule,ModelModule,OptionModule,ProgramModule,ProgramCateModule,
        ServiceModule,ServiceDayModule,ServiceDryerModule,SettingModule,SmsModule,SoapModule,SpecialModule,
        SupplyTransactionModule,TrackModule,TransactionModule,UserVerifyModule,WashFoldModule
    ],
    controllers: [SchemasController]
})
export class SchemasModule {}

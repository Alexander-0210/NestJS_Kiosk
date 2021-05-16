import { Controller, Get, Param, Res } from '@nestjs/common';

import { UserService } from '../schemas/user/user.service';
import { User } from '../schemas/user/schema/user.schema';

import {SettingService} from '../schemas/setting/setting.service';
import {Setting} from '../schemas/setting/schema/setting.schema';

import {KioskIncomeService} from '../schemas/kiosk-income/kiosk-income.service';
import {KioskIncome} from '../schemas/kiosk-income/schema/kiosk-income.schema';
@Controller('cms')
export class CmsController {
    
    constructor(
        private userService : UserService,
        private settingService : SettingService,
        private kioskService : KioskIncomeService,
        ) {}

    @Get()
    getMain():string{
        return "CMS Main Page";
    }

    @Get('dashboard')
    getDashboard() : string{
        return "CMS Dashboard";
    }

    // Get All Users(Phone, Balance)
    @Get('transaction')
    getTransaction(): Promise<User[]> {
        return this.userService.findAllFromPhoneBalance();
    }

    // Get Kiosk Income
    @Get('incomes')
    getKioskIncome(): Promise<KioskIncome[]>{
        var tmpTime:Promise<Setting> = this.settingService.findKioskIncomeClearTime();
        console.log(tmpTime[0]);
        var date = tmpTime[0].value;    
        console.log(date);   
        return this.kioskService.findByDate(date);
    }

    
    @Get('income_time')
    getKioskIncomeTime(): Promise<Setting>{
        return this.settingService.findKioskIncomeClearTime();
    }
}

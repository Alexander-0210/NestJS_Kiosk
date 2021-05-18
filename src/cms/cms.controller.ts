import { Controller, Get, Param, Res } from '@nestjs/common';

import { UserService } from '../schemas/user/user.service';
import { User } from '../schemas/user/schema/user.schema';

import {SettingService} from '../schemas/setting/setting.service';
import {Setting} from '../schemas/setting/schema/setting.schema';

import {KioskIncomeService} from '../schemas/kiosk-income/kiosk-income.service';
import {KioskIncome, KioskIncomeDocument} from '../schemas/kiosk-income/schema/kiosk-income.schema';
import { CMSKioskIncome } from './schema/cms.schema';

import {CmsService} from './cms.service';
@Controller('cms')
export class CmsController {    
    constructor(
        private userService : UserService,
        private settingService : SettingService,
        private kioskService : KioskIncomeService,
        private cmsService:CmsService
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

    // Get Kiosk Income with user Phone
    @Get('incomes')
    async getKioskIncome(): Promise<KioskIncome[]> {
        var tmp = await this.settingService.findKioskIncomeClearTime();
        return this.kioskService.findJoinedUserPhone(tmp);   
    }

    // Get Kiosk Income
    @Get('incomes_all')
    getKioskIncomeAll(): Promise<KioskIncome[]>{
        return this.kioskService.findAll();
    }
    
    @Get('income_time')
    getKioskIncomeTime(): Promise<Date>{
        return this.settingService.findKioskIncomeClearTime();
    }

    @Get('user_kiosk')
    getPopulate() : Promise<any>{
        return this.userService.findJoined();
    }


}

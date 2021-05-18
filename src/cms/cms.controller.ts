import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';

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
    public async getKioskIncome(@Res() res) {
        var tmp = await this.settingService.findKioskIncomeClearTime();
        var ret_vals = await this.kioskService.findJoinedUserPhone(tmp);
        var total_val = 0;
        var bills = [];
        for(var i = 0; i < ret_vals.length; i++){
            var counter = 0;
            if(ret_vals[i]['price'] == null)
                continue;
            if((ret_vals[i]['price'].toString() in bills) == true){
                counter = bills[ret_vals[i]['price']]
            }
            counter += ret_vals[i]['cnt'];
            bills[ret_vals[i]['price'].toString()] = counter;
            total_val += ret_vals[i]['price']*ret_vals[i]['cnt'];
        }
        return res.status(HttpStatus.OK).json({data:ret_vals, total:total_val, bill:bills});  
    }

    // Get Kiosk Income
    @Get('incomes_all')
    getKioskIncomeAll(): Promise<KioskIncome[]>{
        return this.kioskService.findAll();
    }
    
    @Get('income_time')
    getKioskIncomeTime(): Promise<string>{
        return this.settingService.findKioskIncomeClearTime();
    }

    @Get('user_kiosk')
    getPopulate() : Promise<any>{
        return this.userService.findJoined();
    }
}

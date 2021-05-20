import { Controller, Get, HttpStatus, Param, Res } from '@nestjs/common';

import { UserService } from '../schemas/user/user.service';
import { User } from '../schemas/user/schema/user.schema';

import {SettingService} from '../schemas/setting/setting.service';
import {Setting} from '../schemas/setting/schema/setting.schema';

import {KioskIncomeService} from '../schemas/kiosk-income/kiosk-income.service';
import {KioskIncome, KioskIncomeDocument} from '../schemas/kiosk-income/schema/kiosk-income.schema';
//import { CMSKioskIncome } from './schema/cms.schema';

import {CmsService} from './cms.service';
import { Kiosk2IncomeService } from 'src/schemas/kiosk2-income/kiosk2-income.service';
import { Kiosk2Income } from 'src/schemas/kiosk2-income/schema/kiosk2-income.schema';
import { CreditIncomeService } from 'src/schemas/credit-income/credit-income.service';
import { TransactionService } from 'src/schemas/transaction/transaction.service';
import { Transaction } from 'src/schemas/transaction/schema/transaction.schema';
import { WashFoldService } from 'src/schemas/wash-fold/wash-fold.service';
import { SupplyTransactionService } from 'src/schemas/supply-transaction/supply-transaction.service';
import { HomeBankService } from 'src/schemas/home-bank/home-bank.service';
import { PromotionService } from 'src/schemas/promotion/promotion.service';
import { SpecialService } from 'src/schemas/special/special.service';
import { FreeSettingService } from 'src/schemas/free-setting/free-setting.service';
import { ModelService } from 'src/schemas/model/model.service';
import { ProgramService } from 'src/schemas/program/program.service';
import { ServiceService } from 'src/schemas/service/service.service';
import { ServiceDryerService } from 'src/schemas/service-dryer/service-dryer.service';
import { DaysService } from 'src/schemas/days/days.service';
import { OptionService } from 'src/schemas/option/option.service';
import { SoapService } from 'src/schemas/soap/soap.service';
import { MachineService } from 'src/schemas/machine/machine.service';
import { JobService } from 'src/schemas/job/job.service';
import { SupplyService } from 'src/schemas/supply/supply.service';
@Controller('cms')
export class CmsController {    
    constructor(
        private userService : UserService,
        private settingService : SettingService,
        private kioskService : KioskIncomeService,
        private kiosk2Service : Kiosk2IncomeService,
        private creditService : CreditIncomeService,
        private transactionService:TransactionService,
        private washService:WashFoldService,
        private supplyTransactionService:SupplyTransactionService,
        private homeService:HomeBankService,
        private promotionService:PromotionService,
        private specialService:SpecialService,
        private freeService:FreeSettingService,
        private modelService:ModelService,
        private programService:ProgramService,
        private servService:ServiceService,
        private serviceDryerService:ServiceDryerService,
        private dayService:DaysService,
        private optionService:OptionService, 
        private soapService:SoapService, 
        private machineService:MachineService,
        private jobService:JobService,
        private supplyService:SupplyService,

        ) {}

    /**
     * 
     *    Transactions Menu APIs
     * 
     */

    // http://localhost/Cms/incomes  // Get Kiosk Income with user Phone
    @Get('incomes')
    public async getKioskIncome(@Res() res) {
        var tmp = await this.settingService.findKioskIncomeClearTime();
        var ret_vals = await this.kioskService.findJoinedUserPhone(tmp);
        var total_val = 0;
        var bills = {};
        for(var i = 0; i < ret_vals.length; i++){
            var counter = 0;
            if(ret_vals[i]['price'] == null)
                continue;
            if((ret_vals[i]['price'].toString() in bills) == true){
                counter = bills["" + ret_vals[i]['price'] + ""];
            }
            counter += ret_vals[i]['cnt'];
            bills["" + ret_vals[i]['price'] + ""] = counter;
            total_val += ret_vals[i]['price'] * ret_vals[i]['cnt'];
        }
        return res.status(HttpStatus.OK).json({data:ret_vals, total:total_val, bill:bills});  
    }

    // http://localhost/Cms/k2_incomes
    @Get('k2_incomes')
    public async getKiosk2Income(@Res() res) {
        var tmp = await this.settingService.findKiosk2IncomeClearTime();
        console.log(tmp);
        var ret_vals = await this.kiosk2Service.findKiosk2IncomeByDate(tmp);

        var total_bill = 0;
        var total_payout = 0;
        var bills = {};
        var payouts = {};

        for(var i = 0; i < ret_vals.length; i++){
            var counter = 0;
            if(ret_vals[i]['type'] == 'bill')
            {
                if((ret_vals[i]['price'].toString() in bills) == true){
                    counter = bills[""+ ret_vals[i]['price'] + ""]
                }
                counter += ret_vals[i]['cnt'];
                bills["" + ret_vals[i]['price'] + ""] = counter;
                total_bill += ret_vals[i]['price']*ret_vals[i]['cnt'];
            }
            else
            {
                if((ret_vals[i]['price'].toString() in payouts) == true){
                    counter = payouts["" + ret_vals[i]['price'] + ""]
                }
                counter += ret_vals[i]['cnt'];
                payouts["" + ret_vals[i]['price'] + ""] = counter;
                total_payout += ret_vals[i]['price']*ret_vals[i]['cnt'];
            }
        }
        return res.status(HttpStatus.OK).json({data:ret_vals, total_bill:total_bill, bill:bills, total_payout:total_payout, payout:payouts});  
    }

    // http://localhost/Cms/credit_incomes
    @Get('credit_incomes')
    public async getCreditIncome(@Res() res) {
        var tmp = await this.settingService.findCreditIncomeClearTime();
        console.log(tmp);
        var ret_vals = await this.creditService.findCreditIncomeByDate(tmp);

        var total_bill = 0;
        var total_payout = 0;
        var bills = {};

        for(var i = 0; i < ret_vals.length; i++){
            var counter = 0;
            if((ret_vals[i]['method'].toString() in bills) == true){
                counter = bills["" + ret_vals[i]['method'] + ""]
            }
            counter ++;
            bills["" + ret_vals[i]['method'].toString() + ""] = counter;
            total_bill += ret_vals[i]['price'];
        }

        return res.status(HttpStatus.OK).json({data:ret_vals, total_bill:total_bill, bill:bills});  
    }

    // http://localhost/Cms/washer_transactions
    @Get('wash_transactions')
    public async getWashTransactions(@Res() res) {
        var tmp = await this.settingService.findWasherTransactionClearTime();
        console.log(tmp);
        var ret_vals = await this.transactionService.findTransactionsByDate(tmp);

        var total_bill = 0;
        var bills = {};
        var count = 0;

        for(var i = 0; i < ret_vals.length; i++){
            var counter = 0;
            if((ret_vals[i]['method'].toString() in bills) == true){
                counter = bills["" + ret_vals[i]['method'] + ""]
            }
            counter ++;
            bills["" + ret_vals[i]['method'].toString() + ""] = counter;
            total_bill += ret_vals[i]['price'];
            count ++;
        }

        return res.status(HttpStatus.OK).json({data:ret_vals, total_bill:total_bill, bill:bills, total_cnt:count});  
    }

    // http://localhost/Cms/wash_fold
    @Get('wash_fold')
    public async getWashFold(@Res() res) {
        var tmp = await this.settingService.findWashFoldClearTime();
        console.log(tmp);
        var ret_vals = await this.washService.findWashFoldByDate(tmp);

        var total_bill = 0;
        var cash_val = 0;
        var credit_val = 0;
        for(var i = 0; i < ret_vals.length; i++){
            if(ret_vals[i]['payment'] == 'Cash') cash_val += ret_vals[i]['total_price'];
            if(ret_vals[i]['payment'] == 'Credit') credit_val += ret_vals[i]['total_price'];
            total_bill += ret_vals[i]['total_price'];
        }

        return res.status(HttpStatus.OK).json({data:ret_vals, total_bill:total_bill, cash:cash_val, credit:credit_val});  
    }

    // http://localhost/Cms/supplyTransaction
    @Get('supplyTransaction')
    public async getSupplyTransaction(@Res() res) {
        var tmp = await this.settingService.findSupplyTransactionTime();
        console.log(tmp);
        var ret_vals = await this.supplyTransactionService.findSupplyTransactionByDate(tmp);

        var total_bill = 0;
        var cash_val = 0;
        var credit_val = 0;
        for(var i = 0; i < ret_vals.length; i++){
            if(ret_vals[i]['type'] == 'cash') cash_val += ret_vals[i]['price']*ret_vals[i]['count'];
            if(ret_vals[i]['type'] == 'credit') credit_val += ret_vals[i]['price']*ret_vals[i]['count'];
            //total_bill += ret_vals[i]['total_price'];
        }

        return res.status(HttpStatus.OK).json({data:ret_vals, total_bill:cash_val+credit_val, cash:cash_val, credit:credit_val});  
    }

    // http://localhost/Cms/report
    @Get('supplyTransaction')
    getReport(@Res() res) {
        return res.status(HttpStatus.OK).json({data:'Report'});  
    }


    /**
     * 
     *       Management APIs
     * 
     */
    
    // http://localhost/Cms/transaction  // Get All Users(Phone, Balance)

    @Get('transaction')
    getTransaction(): Promise<User[]> {
        return this.userService.findAllFromPhoneBalance();
    }

    // http://localhost/Cms/home_bank
    @Get('home_bank')
    public async getHomeBank(@Res() res) {
        var tmp = await this.settingService.findAdminPhoneNumber();
        console.log(tmp);
        var ret_vals = await this.homeService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals, admin_phone:tmp});  
    }

    // http://localhost/Cms/promotion
    @Get('promotion')
    public async getPromotion(@Res() res) {
        var ret_vals = await this.promotionService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }

    // http://localhost/Cms/specials
    @Get('specials')
    public async getSpecial(@Res() res) {
        var ret_vals = await this.specialService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }

    // http://localhost/Cms/freesetting
    @Get('freesetting')
    public async getFreeSetting(@Res() res) {
        //var ret_vals = await this.freeService.findAllWithModelType();
        var ret_vals = await this.freeService.findAllWithModelType();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }


    /**
     * 
     *      BaseInfo APIs
     * 
     */

    // http://localhost/Cms/models
    @Get('models')
    public async models(@Res() res) {
        var ret_vals = await this.modelService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }

    // http://localhost/Cms/programs
    @Get('programs')
    public async programs(@Res() res) {
        var ret_vals = await this.programService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }
    
    // http://localhost/Cms/services
    @Get('services')
    public async services(@Res() res) {
        var ret_vals = await this.servService.findAll();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }
    
    // http://localhost/Cms/dryer_spins
    @Get('dryer_spins')
    public async dryer_spins(@Res() res) {
        var ret_vals = await this.serviceDryerService.findAllWithModel();
        return res.status(HttpStatus.OK).json({data:ret_vals});  
    }

    // http://localhost/Cms/day_services
    @Get('day_services')
    public async day_services(@Res() res) {
        var model = await this.modelService.findAll();
        var program = await this.programService.findAll();
        var day = await this.dayService.findAll();
        return res.status(HttpStatus.OK).json({model:model, program:program, day:day});  
    }
    // http://localhost/Cms/options
    @Get('options')
    public async options(@Res() res) {        
        var option = await this.optionService.findAll();
        return res.status(HttpStatus.OK).json({data:option});  
    }

    // http://localhost/Cms/soaps
    @Get('soaps')
    public async soaps(@Res() res) {        
        var option = await this.soapService.findAll();
        return res.status(HttpStatus.OK).json({data:option});  
    }

    // http://localhost/Cms/machines
    @Get('machines')
    public async machines(@Res() res) {        
        var option = await this.machineService.findAll();
        return res.status(HttpStatus.OK).json({data:option});  
    }

    // http://localhost/Cms/jobs
    @Get('jobs')
    public async jobs(@Res() res) {        
        var option = await this.jobService.findAllWithUserInfo();
        return res.status(HttpStatus.OK).json({data:option});  
    }    
    
    // http://localhost/Cms/supplys
    @Get('supplys')
    public async supplys(@Res() res) {        
        var option = await this.supplyService.findAll();
        return res.status(HttpStatus.OK).json({data:option});  
    }

    /**
     * 
     *      Details APIs
     * 
     */
    
    // http://localhost/Cms/washer_time_detail
    @Get('washer_time_detail')
    public async washer_time_detail(@Res() res) {        
        return res.status(HttpStatus.OK).json("washer_time_detail");  
    }

    // http://localhost/Cms/washer_time_summary
    @Get('washer_time_summary')
    public async washer_time_summary(@Res() res) {        
        return res.status(HttpStatus.OK).json("washer_time_summary");  
    }

    // http://localhost/Cms/dryer_activity_details
    @Get('dryer_activity_details')
    public async dryer_activity_details(@Res() res) {        
        return res.status(HttpStatus.OK).json("dryer_activity_details");  
    }

    // http://localhost/Cms/dryer_details
    @Get('dryer_details')
    public async dryer_details(@Res() res) {        
        return res.status(HttpStatus.OK).json("dryer_details");  
    }

    // http://localhost/Cms/dryer_summary
    @Get('dryer_summary')
    public async dryer_summary(@Res() res) {        
        return res.status(HttpStatus.OK).json("dryer_summary");  
    }

    // http://localhost/Cms/dryer_time_detail
    @Get('dryer_time_detail')
    public async dryer_time_detail(@Res() res) {        
        return res.status(HttpStatus.OK).json("dryer_time_detail");  
    }

    // http://localhost/Cms/dryer_time_summary
    @Get('dryer_time_summary')
    public async dryer_time_summary(@Res() res) {        
        return res.status(HttpStatus.OK).json("dryer_time_summary");  
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

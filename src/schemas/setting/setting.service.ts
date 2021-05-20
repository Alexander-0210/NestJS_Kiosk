import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SettingDto } from './dto/setting.dto';
import { Setting, SettingDocument } from './schema/setting.schema';
@Injectable()
export class SettingService {
    constructor(
        @InjectModel(Setting.name) private readonly settingModel: Model<SettingDocument>,
    ){}

    async create(createDto : SettingDto) : Promise<Setting> {
        const createdUser = new this.settingModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Setting[]> {
        return this.settingModel.find().exec();
    }

    async findOneByID(phone) : Promise<Setting> {
        return this.settingModel.findOne({phone}).exec();        
    }

    async findKioskIncomeClearTime() : Promise<string> {
        var keyword = "kiosk_income_clear_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findKiosk2IncomeClearTime() : Promise<string> {
        var keyword = "kiosk_home_sale_clear_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findCreditIncomeClearTime() : Promise<string> {
        var keyword = "credit_sale_clear_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findWasherTransactionClearTime() : Promise<string> {
        var keyword = "washer_transaction_clear_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findWashFoldClearTime() : Promise<string> {
        var keyword = "wash_fold_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findSupplyTransactionTime() : Promise<string> {
        var keyword = "supply_trx_time";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
    
    async findAdminPhoneNumber() : Promise<string> {
        var keyword = "admin_phone";
        var tmp = this.settingModel.findOne({keyword}).exec();
        return (await tmp).value;
    }
}

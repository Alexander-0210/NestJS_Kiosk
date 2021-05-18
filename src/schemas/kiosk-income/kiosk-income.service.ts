import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { KioskIncomeDto } from './dto/kiosk-income.dto';
import { KioskIncome, KioskIncomeDocument } from './schema/kiosk-income.schema';
@Injectable()
export class KioskIncomeService {
    constructor(
        @InjectModel(KioskIncome.name) private readonly kioskModel: Model<KioskIncomeDocument>,
    ){}

    async create(createDto : KioskIncomeDto) : Promise<KioskIncome> {
        const createdUser = new this.kioskModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<KioskIncome[]> {
        return this.kioskModel.find().exec();
    }
    
    async findJoinedUserPhone(myDate) : Promise<any> {
        //var str = myDate.toString();
        //return this.kioskModel.find({dt: {$gt: min_date}}).populate('user_phone', 'phone').exec();
        //return this.kioskModel.find().populate('user_phone', 'phone').exec();
        //return this.kioskModel.find({Id:{$gte:10}}).populate('user_phone', 'phone').exec();
        //return this.kioskModel.find({dt:{$gte: new Date('2020-01-01T00:00:00.000Z')}}).exec();
        //return this.kioskModel.find({user_id:{$gte:10}}).populate('user_phone', 'phone').exec();
        //return this.kioskModel.find({},'Id user_id dt').populate('user_phone', 'phone').exec();
        //return this.kioskModel.find({ cnt: { $lt : 5}}).populate('user_phone', 'phone').exec();
        return this.kioskModel.find({dt: {$gte : myDate}}).populate('user_phone', 'phone').exec();
        return this.kioskModel.find({},'Id user_id dt').populate('user_phone', 'phone').exec();
    }
    
    async findByDate(date) : Promise<KioskIncome[]> {
        return this.kioskModel.find({value: { $gte: date}}).exec();
    }

    async findOneByID(phone) : Promise<KioskIncome> {
        return this.kioskModel.findOne({phone}).exec();
    }
}

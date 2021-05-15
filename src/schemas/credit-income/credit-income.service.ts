import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreditIncomeDto } from './dto/credit-income.dto';
import { CreditIncome, CreditIncomeDocument } from './schema/credit-income.schema';

@Injectable()
export class CreditIncomeService {    
    constructor(
        @InjectModel(CreditIncome.name) private readonly creditModel: Model<CreditIncomeDocument>,
    ){}

    async create(createDto : CreditIncomeDto) : Promise<CreditIncome> {
        const createdData = new this.creditModel(createDto);
        return createdData.save();
    }

    async findAll() : Promise<CreditIncome[]> {
        return this.creditModel.find().exec();
    }

    async findOneByID(phone) : Promise<CreditIncome> {
        return this.creditModel.findOne({phone}).exec();
    }
}

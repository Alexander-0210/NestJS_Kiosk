import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupplyTransactionDto } from './dto/supply-transaction.dto';
import { SupplyTransaction, SupplyTransactionDocument } from './schema/supply-transaction.schema';
@Injectable()
export class SupplyTransactionService {
    constructor(
        @InjectModel('Supply_Transaction') private readonly supplyTransactionModel: Model<SupplyTransactionDocument>,
    ){}

    async create(createDto : SupplyTransactionDto) : Promise<SupplyTransaction> {
        const createdUser = new this.supplyTransactionModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<SupplyTransaction[]> {
        return this.supplyTransactionModel.find().exec();
    }

    async findOneByID(phone) : Promise<SupplyTransaction> {
        return this.supplyTransactionModel.findOne({phone}).exec();
    }
    
    async findSupplyTransactionByDate(myDate) : Promise<any> {
        return this.supplyTransactionModel.find({dt: {$gte : myDate}/*, action:'sold'*/}).exec();
    }
}

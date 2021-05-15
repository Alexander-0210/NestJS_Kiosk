import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupplyTransactionDto } from './dto/supply-transaction.dto';
import { SupplyTransaction, SupplyTransactionDocument } from './schema/supply-transaction.schema';
@Injectable()
export class SupplyTransactionService {
    constructor(
        @InjectModel(SupplyTransaction.name) private readonly supplyModel: Model<SupplyTransactionDocument>,
    ){}

    async create(createDto : SupplyTransactionDto) : Promise<SupplyTransaction> {
        const createdUser = new this.supplyModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<SupplyTransaction[]> {
        return this.supplyModel.find().exec();
    }

    async findOneByID(phone) : Promise<SupplyTransaction> {
        return this.supplyModel.findOne({phone}).exec();
    }
}

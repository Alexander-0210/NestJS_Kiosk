import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TransactionDto } from './dto/transaction.dto';
import { Transaction, TransactionDocument } from './schema/transaction.schema';
@Injectable()
export class TransactionService {
    constructor(
        @InjectModel(Transaction.name) private readonly transactionModel: Model<TransactionDocument>,
    ){}

    async create(createDto : TransactionDto) : Promise<Transaction> {
        const createdUser = new this.transactionModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Transaction[]> {
        return this.transactionModel.find().exec();
    }

    async findOneByID(phone) : Promise<Transaction> {
        return this.transactionModel.findOne({phone}).exec();
    }

    async findTransactionsByDate(myDate) : Promise<any> {
        return this.transactionModel.find({dt: {$gte : myDate}}).exec();
        //return this.kioskModel.find({},'Id user_id dt').populate('user_phone', 'phone').exec();
    }
}

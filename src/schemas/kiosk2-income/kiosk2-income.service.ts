import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Kiosk2IncomeDto } from './dto/kiosk2-income.dto';
import { Kiosk2Income, Kiosk2IncomeDocument, Kiosk2IncomeSchema } from './schema/kiosk2-income.schema';
@Injectable()
export class Kiosk2IncomeService {
    constructor(
        @InjectModel(Kiosk2Income.name) private readonly kiosk2Model: Model<Kiosk2IncomeDocument>,
    ){}

    async create(createDto : Kiosk2IncomeDto) : Promise<Kiosk2Income> {
        const createdUser = new this.kiosk2Model(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Kiosk2Income[]> {
        return this.kiosk2Model.find().exec();
    }

    async findOneByID(phone) : Promise<Kiosk2Income> {
        return this.kiosk2Model.findOne({phone}).exec();
    }
}

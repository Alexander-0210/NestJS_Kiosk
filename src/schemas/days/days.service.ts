import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { DaysDto } from './dto/days.dto';
import { Days, DaysDocument } from './schema/days.schema';

@Injectable()
export class DaysService {
    constructor(
        @InjectModel(Days.name) private readonly daysModel: Model<DaysDocument>,
    ){}

    async create(createdDto : DaysDto) : Promise<Days> {
        const createdUser = new this.daysModel(createdDto);
        return createdUser.save();
    }

    async findAll() : Promise<Days[]> {
        return this.daysModel.find().exec();
    }

    async findOneByID(phone) : Promise<Days> {
        return this.daysModel.findOne({phone}).exec();
    }
}

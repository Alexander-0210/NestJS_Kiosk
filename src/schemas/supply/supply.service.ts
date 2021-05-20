import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SupplyDto } from './dto/supply.dto';
import { Supply, SupplyDocument } from './schema/supply.schema';

@Injectable()
export class SupplyService {
    constructor(
        @InjectModel(Supply.name) private readonly supplyModel: Model<SupplyDocument>,
    ){}

    async create(createUserDto : SupplyDto) : Promise<Supply> {
        const createdUser = new this.supplyModel(createUserDto);
        return createdUser.save();
    }

    async findAll() : Promise<Supply[]> {
        return this.supplyModel.find().exec();
    }

    async findOneByID(phone) : Promise<Supply> {
        return this.supplyModel.findOne({phone}).exec();
    }
}

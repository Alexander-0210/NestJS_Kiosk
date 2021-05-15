import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OptionDto } from './dto/option.dto';
import { Option, OptionDocument } from './schema/option.schema';
@Injectable()
export class OptionService {
    constructor(
        @InjectModel(Option.name) private readonly optionModel: Model<OptionDocument>,
    ){}

    async create(createDto : OptionDto) : Promise<Option> {
        const createdUser = new this.optionModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Option[]> {
        return this.optionModel.find().exec();
    }

    async findOneByID(phone) : Promise<Option> {
        return this.optionModel.findOne({phone}).exec();
    }
}

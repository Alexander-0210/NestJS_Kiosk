import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SpecialDto } from './dto/special.dto';
import { Special, SpecialDocument } from './schema/special.schema';
@Injectable()
export class SpecialService {
    constructor(
        @InjectModel(Special.name) private readonly specialModel: Model<SpecialDocument>,
    ){}

    async create(createUserDto : SpecialDto) : Promise<Special> {
        const createdUser = new this.specialModel(createUserDto);
        return createdUser.save();
    }

    async findAll() : Promise<Special[]> {
        return this.specialModel.find().exec();
    }

    async findOneByID(phone) : Promise<Special> {
        return this.specialModel.findOne({phone}).exec();
    }
}

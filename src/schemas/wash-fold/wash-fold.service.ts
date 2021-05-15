import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { WashFoldDto } from './dto/wash-fold.dto';
import { WashFold, WashFoldDocument } from './schema/wash-fold.schema';
@Injectable()
export class WashFoldService {
    constructor(
        @InjectModel(WashFold.name) private readonly washFoldModel: Model<WashFoldDocument>,
    ){}

    async create(createDto : WashFoldDto) : Promise<WashFold> {
        const createdUser = new this.washFoldModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<WashFold[]> {
        return this.washFoldModel.find().exec();
    }

    async findOneByID(phone) : Promise<WashFold> {
        return this.washFoldModel.findOne({phone}).exec();
    }
}

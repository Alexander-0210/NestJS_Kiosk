import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeBankStateDto } from './dto/home-bank-state.dto';
import { HomeBankState, HomeBankStateDocument } from './schema/home-bank-state.schema';
@Injectable()
export class HomeBankStateService {    
    constructor(
        @InjectModel(HomeBankState.name) private readonly homeBankStateModel: Model<HomeBankStateDocument>,
    ){}

    async create(createDto : HomeBankStateDto) : Promise<HomeBankState> {
        const createdUser = new this.homeBankStateModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<HomeBankState[]> {
        return this.homeBankStateModel.find().exec();
    }

    async findOneByID(phone) : Promise<HomeBankState> {
        return this.homeBankStateModel.findOne({phone}).exec();
    }
}

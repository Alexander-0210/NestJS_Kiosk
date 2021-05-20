import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HomeBankDto } from './dto/home-bank.dto';
import { HomeBank, HomeBankDocument } from './schema/home-bank.schema';
@Injectable()
export class HomeBankService {
    constructor(
        @InjectModel('home_bank') private readonly homebankModel: Model<HomeBankDocument>,
    ){}

    async create(createdDto : HomeBankDto) : Promise<HomeBank> {
        const createdUser = new this.homebankModel(createdDto);
        return createdUser.save();
    }

    async findAll() : Promise<HomeBank[]> {
        return this.homebankModel.find().exec();
    }

    async findOneByID(phone) : Promise<HomeBank> {
        return this.homebankModel.findOne({phone}).exec();
    }
}

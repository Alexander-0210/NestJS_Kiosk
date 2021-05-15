import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SettingDto } from './dto/setting.dto';
import { Setting, SettingDocument } from './schema/setting.schema';
@Injectable()
export class SettingService {
    constructor(
        @InjectModel(Setting.name) private readonly userModel: Model<SettingDocument>,
    ){}

    async create(createDto : SettingDto) : Promise<Setting> {
        const createdUser = new this.userModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Setting[]> {
        return this.userModel.find().exec();
    }

    async findOneByID(phone) : Promise<Setting> {
        return this.userModel.findOne({phone}).exec();
    }
}

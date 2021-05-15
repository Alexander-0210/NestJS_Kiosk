import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FreeSettingDto } from './dto/free-setting.dto';
import { FreeSetting, FreeSettingDocument } from './schema/free-setting.schema';
@Injectable()
export class FreeSettingService {
    constructor(
        @InjectModel(FreeSetting.name) private readonly settingModel: Model<FreeSettingDocument>,
    ){}

    async create(createUserDto : FreeSettingDto) : Promise<FreeSetting> {
        const createdUser = new this.settingModel(createUserDto);
        return createdUser.save();
    }

    async findAll() : Promise<FreeSetting[]> {
        return this.settingModel.find().exec();
    }

    async findOneByID(phone) : Promise<FreeSetting> {
        return this.settingModel.findOne({phone}).exec();
    }
}

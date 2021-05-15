import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SmsDto } from './dto/sms.dto';
import { Sms, SmsDocument } from './schema/sms.schema';
@Injectable()
export class SmsService {
    constructor(
        @InjectModel(Sms.name) private readonly userModel: Model<SmsDocument>,
    ){}

    async create(createDto : SmsDto) : Promise<Sms> {
        const createdUser = new this.userModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Sms[]> {
        return this.userModel.find().exec();
    }

    async findOneByID(phone) : Promise<Sms> {
        return this.userModel.findOne({phone}).exec();
    }
}

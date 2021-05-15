import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserVerifyDto } from './dto/user-verify.dto';
import { UserVerify, UserVerifyDocument } from './schema/user-verify.schema';
@Injectable()
export class UserVerifyService {
    constructor(
        @InjectModel(UserVerify.name) private readonly userVerifyModel: Model<UserVerifyDocument>,
    ){}

    async create(createDto : UserVerifyDto) : Promise<UserVerify> {
        const createdUser = new this.userVerifyModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<UserVerify[]> {
        return this.userVerifyModel.find().exec();
    }

    async findOneByID(phone) : Promise<UserVerify> {
        return this.userVerifyModel.findOne({phone}).exec();
    }
}

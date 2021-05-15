import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ModelDto } from './dto/model.dto';
import { ModelCls, ModelDocument } from './schema/model.schema';
@Injectable()
export class ModelService {
    constructor(
        @InjectModel(ModelCls.name) private readonly userModel: Model<ModelDocument>,
    ){}

    async create(createUserDto : ModelDto) : Promise<ModelCls> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }

    async findAll() : Promise<ModelCls[]> {
        return this.userModel.find().exec();
    }

    async findOneByID(phone) : Promise<ModelCls> {
        return this.userModel.findOne({phone}).exec();
    }
}

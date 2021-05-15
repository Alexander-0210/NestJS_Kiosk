import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceDryerDto } from './dto/service-dryer.dto';
import { ServiceDryer, ServiceDryerDocument } from './schema/service-dryer.schema';
@Injectable()
export class ServiceDryerService {
    constructor(
        @InjectModel(ServiceDryer.name) private readonly userModel: Model<ServiceDryerDocument>,
    ){}

    async create(createDto : ServiceDryerDto) : Promise<ServiceDryer> {
        const createdUser = new this.userModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<ServiceDryer[]> {
        return this.userModel.find().exec();
    }

    async findOneByID(phone) : Promise<ServiceDryer> {
        return this.userModel.findOne({phone}).exec();
    }
}

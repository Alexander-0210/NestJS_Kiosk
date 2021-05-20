import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceDto } from './dto/service.dto';
import { ServiceDocument, ServiceCls } from './schema/service.schema';
@Injectable()
export class ServiceService {
    constructor(
        @InjectModel('Service') private readonly serviceModel: Model<ServiceDocument>,
    ){}

    async create(createDto : ServiceDto) : Promise<ServiceCls> {
        const createdUser = new this.serviceModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<ServiceCls[]> {
        return this.serviceModel.find().exec();
    }

    async findOneByID(phone) : Promise<ServiceCls> {
        return this.serviceModel.findOne({phone}).exec();
    }
}

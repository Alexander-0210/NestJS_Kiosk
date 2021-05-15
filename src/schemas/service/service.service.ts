import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ServiceDto } from './dto/service.dto';
import { Service, ServiceDocument } from './schema/service.schema';
@Injectable()
export class ServiceService {
    constructor(
        @InjectModel(Service.name) private readonly serviceModel: Model<ServiceDocument>,
    ){}

    async create(createDto : ServiceDto) : Promise<Service> {
        const createdUser = new this.serviceModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Service[]> {
        return this.serviceModel.find().exec();
    }

    async findOneByID(phone) : Promise<Service> {
        return this.serviceModel.findOne({phone}).exec();
    }
}

import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SoapDto } from './dto/soap.dto';
import { Soap, SoapDocument } from './schema/soap.schema';
@Injectable()
export class SoapService {
    constructor(
        @InjectModel(Soap.name) private readonly soapModel: Model<SoapDocument>,
    ){}

    async create(createDto : SoapDto) : Promise<Soap> {
        const createdUser = new this.soapModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Soap[]> {
        return this.soapModel.find().exec();
    }

    async findOneByID(phone) : Promise<Soap> {
        return this.soapModel.findOne({phone}).exec();
    }
}

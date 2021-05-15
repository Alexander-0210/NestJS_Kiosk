import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineTypeDto } from './dto/machine-type.dto';
import { MachineType, MachineTypeDocument } from './schema/machine-type.schema';
@Injectable()
export class MachineTypeService {
    constructor(
        @InjectModel(MachineType.name) private readonly machineTypeModel: Model<MachineTypeDocument>,
    ){}

    async create(createUserDto : MachineTypeDto) : Promise<MachineType> {
        const createdUser = new this.machineTypeModel(createUserDto);
        return createdUser.save();
    }

    async findAll() : Promise<MachineType[]> {
        return this.machineTypeModel.find().exec();
    }

    async findOneByID(phone) : Promise<MachineType> {
        return this.machineTypeModel.findOne({phone}).exec();
    }
}

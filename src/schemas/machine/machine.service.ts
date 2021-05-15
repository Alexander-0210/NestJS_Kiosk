import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MachineDto } from './dto/machine.dto';
import { Machine, MachineDocument } from './schema/machine.schema';
@Injectable()
export class MachineService {
    constructor(
        @InjectModel(Machine.name) private readonly machineModel: Model<MachineDocument>,
    ){}

    async create(createDto : MachineDto) : Promise<Machine> {
        const createdUser = new this.machineModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Machine[]> {
        return this.machineModel.find().exec();
    }

    async findOneByID(phone) : Promise<Machine> {
        return this.machineModel.findOne({phone}).exec();
    }
}

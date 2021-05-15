import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProgramDto } from './dto/program.dto';
import { Program, ProgramDocument } from './schema/program.schema';
@Injectable()
export class ProgramService {
    constructor(
        @InjectModel(Program.name) private readonly programModel: Model<ProgramDocument>,
    ){}

    async create(createDto : ProgramDto) : Promise<Program> {
        const createdUser = new this.programModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Program[]> {
        return this.programModel.find().exec();
    }

    async findOneByID(phone) : Promise<Program> {
        return this.programModel.findOne({phone}).exec();
    }
}

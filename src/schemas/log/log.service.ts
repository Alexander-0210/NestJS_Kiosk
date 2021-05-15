import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LogDto } from './dto/log.dto';
import { Log, LogDocument } from './schema/log.schema';
@Injectable()
export class LogService {
    constructor(
        @InjectModel(Log.name) private readonly logModel: Model<LogDocument>,
    ){}

    async create(createDto : LogDto) : Promise<Log> {
        const createdUser = new this.logModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Log[]> {
        return this.logModel.find().exec();
    }

    async findOneByID(phone) : Promise<Log> {
        return this.logModel.findOne({phone}).exec();
    }
}

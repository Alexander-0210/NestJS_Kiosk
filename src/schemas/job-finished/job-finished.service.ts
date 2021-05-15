import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobFinishedDto } from './dto/job-finished.dto';
import { JobFinished, JobFinishedDocument } from './schema/job-finished.schema';
@Injectable()
export class JobFinishedService {
    constructor(
        @InjectModel(JobFinished.name) private readonly jobFinishedModel: Model<JobFinishedDocument>,
    ){}

    async create(createDto : JobFinishedDto) : Promise<JobFinished> {
        const createdUser = new this.jobFinishedModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<JobFinished[]> {
        return this.jobFinishedModel.find().exec();
    }

    async findOneByID(phone) : Promise<JobFinished> {
        return this.jobFinishedModel.findOne({phone}).exec();
    }
}

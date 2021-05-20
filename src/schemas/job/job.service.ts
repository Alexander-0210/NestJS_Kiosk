import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { JobDto } from './dto/job.dto';
import { Job, JobDocument } from './schema/job.schema';
@Injectable()
export class JobService {
    
    constructor(
        @InjectModel(Job.name) private readonly jobModel: Model<JobDocument>,
    ){}

    async create(createDto : JobDto) : Promise<Job> {
        const createdUser = new this.jobModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Job[]> {
        return this.jobModel.find().exec();
    }
    
    async findAllWithUserInfo() : Promise<Job[]> {
        return this.jobModel.find().populate('user_info').populate('program_info').exec();
    }

    async findOneByID(phone) : Promise<Job> {
        return this.jobModel.findOne({phone}).exec();
    }
}

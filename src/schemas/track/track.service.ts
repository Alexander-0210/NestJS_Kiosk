import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TrackDto } from './dto/track.dto';
import { TrackDocument, Track } from './schema/track.schema';
@Injectable()
export class TrackService {
    constructor(
        @InjectModel(Track.name) private readonly trackModel: Model<TrackDocument>,
    ){}

    async create(createDto : TrackDto) : Promise<Track> {
        const createdUser = new this.trackModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Track[]> {
        return this.trackModel.find().exec();
    }

    async findOneByID(phone) : Promise<Track> {
        return this.trackModel.findOne({phone}).exec();
    }
}

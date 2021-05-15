import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { PromotionDto } from './dto/promotion.dto';
import { Promotion, PromotionDocument } from './schema/promotion.schema';
@Injectable()
export class PromotionService {
    constructor(
        @InjectModel(Promotion.name) private readonly promotionModel: Model<PromotionDocument>,
    ){}

    async create(createDto : PromotionDto) : Promise<Promotion> {
        const createdUser = new this.promotionModel(createDto);
        return createdUser.save();
    }

    async findAll() : Promise<Promotion[]> {
        return this.promotionModel.find().exec();
    }

    async findOneByID(phone) : Promise<Promotion> {
        return this.promotionModel.findOne({phone}).exec();
    }
}

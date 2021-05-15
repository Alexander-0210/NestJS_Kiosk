import { Module } from '@nestjs/common';
import { PromotionController } from './promotion.controller';
import { PromotionService } from './promotion.service';

import { MongooseModule } from '@nestjs/mongoose';
import { PromotionSchema, Promotion } from './schema/promotion.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Promotion.name, schema: PromotionSchema }])],
  controllers: [PromotionController],
  providers: [PromotionService],
  exports:[PromotionService]
})
export class PromotionModule {}

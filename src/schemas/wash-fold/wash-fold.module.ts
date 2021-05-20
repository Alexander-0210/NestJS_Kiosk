import { Module } from '@nestjs/common';
import { WashFoldController } from './wash-fold.controller';
import { WashFoldService } from './wash-fold.service';

import { MongooseModule } from '@nestjs/mongoose';
import { WashFoldSchema, WashFold } from './schema/wash-fold.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'wash_fold', schema: WashFoldSchema }])],
  controllers: [WashFoldController],
  providers: [WashFoldService],
  exports:[WashFoldService]
})
export class WashFoldModule {}

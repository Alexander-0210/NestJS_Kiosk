import { Module } from '@nestjs/common';
import { ModelController } from './model.controller';
import { ModelService } from './model.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ModelSchema, ModelCls } from './schema/model.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Model', schema: ModelSchema }])],
  controllers: [ModelController],
  providers: [ModelService],
  exports:[ModelService]
})
export class ModelModule {}

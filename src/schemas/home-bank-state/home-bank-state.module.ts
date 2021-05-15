import { Module } from '@nestjs/common';
import { HomeBankStateController } from './home-bank-state.controller';
import { HomeBankStateService } from './home-bank-state.service';

import { MongooseModule } from '@nestjs/mongoose';
import { HomeBankStateSchema, HomeBankState } from './schema/home-bank-state.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: HomeBankState.name, schema: HomeBankStateSchema }])],
  controllers: [HomeBankStateController],
  providers: [HomeBankStateService],
  exports: [HomeBankStateService]
})
export class HomeBankStateModule {}

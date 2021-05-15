import { Module } from '@nestjs/common';
import { HomeBankController } from './home-bank.controller';
import { HomeBankService } from './home-bank.service';

import { MongooseModule } from '@nestjs/mongoose';
import { HomeBankSchema, HomeBank } from './schema/home-bank.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: HomeBank.name, schema: HomeBankSchema }])],
  controllers: [HomeBankController],
  providers: [HomeBankService],
  exports:[HomeBankService]
})
export class HomeBankModule {}

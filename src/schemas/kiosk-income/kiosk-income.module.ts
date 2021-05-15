import { Module } from '@nestjs/common';
import { KioskIncomeController } from './kiosk-income.controller';
import { KioskIncomeService } from './kiosk-income.service';

import { MongooseModule } from '@nestjs/mongoose';
import { KioskIncomeSchema, KioskIncome } from './schema/kiosk-income.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: KioskIncome.name, schema: KioskIncomeSchema }])],
  controllers: [KioskIncomeController],
  providers: [KioskIncomeService],
  exports: [KioskIncomeService]
})
export class KioskIncomeModule {}

import { Module } from '@nestjs/common';
import { Kiosk2IncomeController } from './kiosk2-income.controller';
import { Kiosk2IncomeService } from './kiosk2-income.service';

import { MongooseModule } from '@nestjs/mongoose';
import { Kiosk2IncomeSchema, Kiosk2Income } from './schema/kiosk2-income.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Kiosk2Income.name, schema: Kiosk2IncomeSchema }])],
  controllers: [Kiosk2IncomeController],
  providers: [Kiosk2IncomeService],
  exports:[Kiosk2IncomeService]
})
export class Kiosk2IncomeModule {}

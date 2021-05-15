import { Module } from '@nestjs/common';
import { Kiosk2IncomeController } from './kiosk2-income.controller';
import { Kiosk2IncomeService } from './kiosk2-income.service';

@Module({
  controllers: [Kiosk2IncomeController],
  providers: [Kiosk2IncomeService]
})
export class Kiosk2IncomeModule {}

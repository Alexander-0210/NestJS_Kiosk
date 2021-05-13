import { Module } from '@nestjs/common';
import { Kiosk2IncomeController } from './kiosk2-income.controller';

@Module({
  controllers: [Kiosk2IncomeController]
})
export class Kiosk2IncomeModule {}

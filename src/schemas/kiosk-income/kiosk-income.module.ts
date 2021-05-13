import { Module } from '@nestjs/common';
import { KioskIncomeController } from './kiosk-income.controller';

@Module({
  controllers: [KioskIncomeController]
})
export class KioskIncomeModule {}

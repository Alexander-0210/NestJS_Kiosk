import { Module } from '@nestjs/common';
import { KioskIncomeController } from './kiosk-income.controller';
import { KioskIncomeService } from './kiosk-income.service';

@Module({
  controllers: [KioskIncomeController],
  providers: [KioskIncomeService]
})
export class KioskIncomeModule {}

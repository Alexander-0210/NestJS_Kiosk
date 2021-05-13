import { Module } from '@nestjs/common';
import { CreditIncomeController } from './credit-income.controller';

@Module({
  controllers: [CreditIncomeController]
})
export class CreditIncomeModule {}

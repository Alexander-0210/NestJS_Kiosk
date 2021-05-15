import { Module } from '@nestjs/common';
import { CreditIncomeController } from './credit-income.controller';
import { CreditIncomeService } from './credit-income.service';

@Module({
  controllers: [CreditIncomeController],
  providers: [CreditIncomeService]
})
export class CreditIncomeModule {}

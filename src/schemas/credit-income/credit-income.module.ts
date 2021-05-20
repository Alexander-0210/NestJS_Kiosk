import { Module } from '@nestjs/common';
import { CreditIncomeController } from './credit-income.controller';
import { CreditIncomeService } from './credit-income.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CreditIncome, CreditIncomeSchema } from './schema/credit-income.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Credit_Income', schema: CreditIncomeSchema }])],
  controllers: [CreditIncomeController],
  providers: [CreditIncomeService],
  exports: [CreditIncomeService]
})
export class CreditIncomeModule {}

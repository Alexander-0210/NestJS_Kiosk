import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { TransactionService } from './transaction.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema, Transaction } from './schema/transaction.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Transaction.name, schema: TransactionSchema }])],
  controllers: [TransactionController],
  providers: [TransactionService],
  exports:[TransactionService]
})
export class TransactionModule {}

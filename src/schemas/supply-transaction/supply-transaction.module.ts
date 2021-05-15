import { Module } from '@nestjs/common';
import { SupplyTransactionController } from './supply-transaction.controller';
import { SupplyTransactionService } from './supply-transaction.service';

@Module({
  controllers: [SupplyTransactionController],
  providers: [SupplyTransactionService]
})
export class SupplyTransactionModule {}

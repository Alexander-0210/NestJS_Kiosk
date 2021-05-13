import { Module } from '@nestjs/common';
import { SupplyTransactionController } from './supply-transaction.controller';

@Module({
  controllers: [SupplyTransactionController]
})
export class SupplyTransactionModule {}

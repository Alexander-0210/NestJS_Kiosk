import { Module } from '@nestjs/common';
import { SupplyTransactionController } from './supply-transaction.controller';
import { SupplyTransactionService } from './supply-transaction.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SupplyTransactionSchema, SupplyTransaction } from './schema/supply-transaction.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Supply_Transaction', schema: SupplyTransactionSchema }])],
  controllers: [SupplyTransactionController],
  providers: [SupplyTransactionService],
  exports:[SupplyTransactionService]
})
export class SupplyTransactionModule {}

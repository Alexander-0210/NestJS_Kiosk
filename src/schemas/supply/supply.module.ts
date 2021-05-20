import { Module } from '@nestjs/common';
import { SupplyController } from './supply.controller';
import { SupplyService } from './supply.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SupplySchema, Supply } from './schema/supply.schema';

@Module({  
  imports: [MongooseModule.forFeature([{ name: Supply.name, schema: SupplySchema }])],
  controllers: [SupplyController],
  providers: [SupplyService],
  exports:[SupplyService]
})
export class SupplyModule {}

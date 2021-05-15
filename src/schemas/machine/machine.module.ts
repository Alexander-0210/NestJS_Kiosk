import { Module } from '@nestjs/common';
import { MachineController } from './machine.controller';
import { MachineService } from './machine.service';

import { MongooseModule } from '@nestjs/mongoose';
import { MachineSchema, Machine } from './schema/machine.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Machine.name, schema: MachineSchema }])],
  controllers: [MachineController],
  providers: [MachineService],
  exports:[MachineService]
})
export class MachineModule {}

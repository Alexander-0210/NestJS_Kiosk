import { Module } from '@nestjs/common';
import { MachineTypeController } from './machine-type.controller';
import { MachineTypeService } from './machine-type.service';

import { MongooseModule } from '@nestjs/mongoose';
import { MachineTypeSchema, MachineType } from './schema/machine-type.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: MachineType.name, schema: MachineTypeSchema }])],
  controllers: [MachineTypeController],
  providers: [MachineTypeService],
  exports:[MachineTypeService]
})
export class MachineTypeModule {}

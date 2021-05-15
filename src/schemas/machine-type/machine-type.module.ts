import { Module } from '@nestjs/common';
import { MachineTypeController } from './machine-type.controller';
import { MachineTypeService } from './machine-type.service';

@Module({
  controllers: [MachineTypeController],
  providers: [MachineTypeService]
})
export class MachineTypeModule {}

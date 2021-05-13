import { Module } from '@nestjs/common';
import { MachineTypeController } from './machine-type.controller';

@Module({
  controllers: [MachineTypeController]
})
export class MachineTypeModule {}

import { Module } from '@nestjs/common';
import { ServiceDryerController } from './service-dryer.controller';

@Module({
  controllers: [ServiceDryerController]
})
export class ServiceDryerModule {}

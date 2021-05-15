import { Module } from '@nestjs/common';
import { ServiceDryerController } from './service-dryer.controller';
import { ServiceDryerService } from './service-dryer.service';

@Module({
  controllers: [ServiceDryerController],
  providers: [ServiceDryerService]
})
export class ServiceDryerModule {}

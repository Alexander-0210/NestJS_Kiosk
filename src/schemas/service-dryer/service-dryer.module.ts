import { Module } from '@nestjs/common';
import { ServiceDryerController } from './service-dryer.controller';
import { ServiceDryerService } from './service-dryer.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ServiceDryerSchema, ServiceDryer } from './schema/service-dryer.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'service_dryer', schema: ServiceDryerSchema }])],
  controllers: [ServiceDryerController],
  providers: [ServiceDryerService],
  exports:[ServiceDryerService]
})
export class ServiceDryerModule {}

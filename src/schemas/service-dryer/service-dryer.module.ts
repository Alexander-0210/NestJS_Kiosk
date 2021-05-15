import { Module } from '@nestjs/common';
import { ServiceDryerController } from './service-dryer.controller';
import { ServiceDryerService } from './service-dryer.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ServiceDryerSchema, ServiceDryer } from './schema/service-dryer.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: ServiceDryer.name, schema: ServiceDryerSchema }])],
  controllers: [ServiceDryerController],
  providers: [ServiceDryerService]
})
export class ServiceDryerModule {}

import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema, Service } from './schema/service.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Service.name, schema: ServiceSchema }])],
  controllers: [ServiceController],
  providers: [ServiceService]
})
export class ServiceModule {}

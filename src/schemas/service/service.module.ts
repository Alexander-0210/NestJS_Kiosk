import { Module } from '@nestjs/common';
import { ServiceController } from './service.controller';
import { ServiceService } from './service.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ServiceSchema } from './schema/service.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Service', schema: ServiceSchema }])],
  controllers: [ServiceController],
  providers: [ServiceService],
  exports:[ServiceService]
})
export class ServiceModule {}

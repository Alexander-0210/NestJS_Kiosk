import { Module } from '@nestjs/common';
import { SoapController } from './soap.controller';
import { SoapService } from './soap.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SoapSchema, Soap } from './schema/soap.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Soap.name, schema: SoapSchema }])],
  controllers: [SoapController],
  providers: [SoapService],
  exports:[SoapService]
})
export class SoapModule {}

import { Module } from '@nestjs/common';
import { SmsController } from './sms.controller';
import { SmsService } from './sms.service';

import { MongooseModule } from '@nestjs/mongoose';
import { SmsSchema, Sms } from './schema/sms.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Sms.name, schema: SmsSchema }])],
  controllers: [SmsController],
  providers: [SmsService],
  exports:[SmsService]
})
export class SmsModule {}

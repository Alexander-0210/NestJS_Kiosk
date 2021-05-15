import { Module } from '@nestjs/common';
import { SoapController } from './soap.controller';
import { SoapService } from './soap.service';

@Module({
  controllers: [SoapController],
  providers: [SoapService]
})
export class SoapModule {}

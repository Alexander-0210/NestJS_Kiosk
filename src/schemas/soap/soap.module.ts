import { Module } from '@nestjs/common';
import { SoapController } from './soap.controller';

@Module({
  controllers: [SoapController]
})
export class SoapModule {}

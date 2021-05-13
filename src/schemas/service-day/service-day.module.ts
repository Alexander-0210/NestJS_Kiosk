import { Module } from '@nestjs/common';
import { ServiceDayController } from './service-day.controller';

@Module({
  controllers: [ServiceDayController]
})
export class ServiceDayModule {}

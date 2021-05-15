import { Module } from '@nestjs/common';
import { ServiceDayController } from './service-day.controller';
import { ServiceDayService } from './service-day.service';

@Module({
  controllers: [ServiceDayController],
  providers: [ServiceDayService]
})
export class ServiceDayModule {}

import { Module } from '@nestjs/common';
import { KioskapiController } from './kioskapi.controller';
import { KioskapiService } from './kioskapi.service';

@Module({
  controllers: [KioskapiController],
  providers: [KioskapiService]
})
export class KioskapiModule {}

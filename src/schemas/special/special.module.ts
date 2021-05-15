import { Module } from '@nestjs/common';
import { SpecialController } from './special.controller';
import { SpecialService } from './special.service';

@Module({
  controllers: [SpecialController],
  providers: [SpecialService]
})
export class SpecialModule {}

import { Module } from '@nestjs/common';
import { SpecialController } from './special.controller';

@Module({
  controllers: [SpecialController]
})
export class SpecialModule {}

import { Module } from '@nestjs/common';
import { HomeBankStateController } from './home-bank-state.controller';

@Module({
  controllers: [HomeBankStateController]
})
export class HomeBankStateModule {}

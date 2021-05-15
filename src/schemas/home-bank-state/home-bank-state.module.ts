import { Module } from '@nestjs/common';
import { HomeBankStateController } from './home-bank-state.controller';
import { HomeBankStateService } from './home-bank-state.service';

@Module({
  controllers: [HomeBankStateController],
  providers: [HomeBankStateService]
})
export class HomeBankStateModule {}

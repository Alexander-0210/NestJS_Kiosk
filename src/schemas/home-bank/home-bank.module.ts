import { Module } from '@nestjs/common';
import { HomeBankController } from './home-bank.controller';

@Module({
  controllers: [HomeBankController]
})
export class HomeBankModule {}

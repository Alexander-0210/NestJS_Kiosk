import { Module } from '@nestjs/common';
import { HomeBankController } from './home-bank.controller';
import { HomeBankService } from './home-bank.service';

@Module({
  controllers: [HomeBankController],
  providers: [HomeBankService]
})
export class HomeBankModule {}

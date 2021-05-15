import { Module } from '@nestjs/common';
import { WashFoldController } from './wash-fold.controller';
import { WashFoldService } from './wash-fold.service';

@Module({
  controllers: [WashFoldController],
  providers: [WashFoldService]
})
export class WashFoldModule {}

import { Module } from '@nestjs/common';
import { WashFoldController } from './wash-fold.controller';

@Module({
  controllers: [WashFoldController]
})
export class WashFoldModule {}

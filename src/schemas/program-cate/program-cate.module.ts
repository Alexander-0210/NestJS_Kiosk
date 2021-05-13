import { Module } from '@nestjs/common';
import { ProgramCateController } from './program-cate.controller';

@Module({
  controllers: [ProgramCateController]
})
export class ProgramCateModule {}

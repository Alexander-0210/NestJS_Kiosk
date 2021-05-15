import { Module } from '@nestjs/common';
import { ProgramCateController } from './program-cate.controller';
import { ProgramCateService } from './program-cate.service';

@Module({
  controllers: [ProgramCateController],
  providers: [ProgramCateService]
})
export class ProgramCateModule {}

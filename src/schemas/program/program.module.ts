import { Module } from '@nestjs/common';
import { ProgramController } from './program.controller';
import { ProgramService } from './program.service';

import { MongooseModule } from '@nestjs/mongoose';
import { ProgramSchema, Program } from './schema/program.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Program.name, schema: ProgramSchema }])],
  controllers: [ProgramController],
  providers: [ProgramService],
  exports:[ProgramService]
})
export class ProgramModule {}

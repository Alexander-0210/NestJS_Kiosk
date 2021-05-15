import { Module } from '@nestjs/common';
import { TrackController } from './track.controller';
import { TrackService } from './track.service';

import { MongooseModule } from '@nestjs/mongoose';
import { TrackSchema, Track } from './schema/track.schema';
@Module({
  imports: [MongooseModule.forFeature([{ name: Track.name, schema: TrackSchema }])],
  controllers: [TrackController],
  providers: [TrackService],
  exports:[TrackService]
})
export class TrackModule {}

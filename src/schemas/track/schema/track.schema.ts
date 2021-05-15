import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TrackDocument = Track & Document;

@Schema()
export class Track {
  @Prop()
  id:number;

  @Prop()
  phone:string;

  @Prop()
  model_id:number;

  @Prop()
  used:number;
}

export const TrackSchema = SchemaFactory.createForClass(Track);

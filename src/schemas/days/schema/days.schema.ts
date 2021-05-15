import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DaysDocument = Days & Document;

@Schema()
export class Days {
  @Prop()
  id:number;

  @Prop()
  name:string;

  @Prop()
  short_name:string;

  @Prop()
  price:number;
}

export const DaysSchema = SchemaFactory.createForClass(Days);

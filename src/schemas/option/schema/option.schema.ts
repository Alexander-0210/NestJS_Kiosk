import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type OptionDocument = Option & Document;

@Schema()
export class Option {
  @Prop()
  id:number;

  @Prop()
  name:string;

  @Prop()
  value:number;

  @Prop()
  price:number;
}

export const OptionSchema = SchemaFactory.createForClass(Option);

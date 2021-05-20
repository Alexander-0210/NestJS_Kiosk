import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type WashFoldDocument = WashFold & Document;

@Schema()
export class WashFold {
  @Prop()
  id:number;

  @Prop()
  dt:string;

  @Prop()
  weight:number;

  @Prop()
  soap:string;

  @Prop()
  price_lbs:number;

  @Prop()
  total_price:number;

  @Prop()
  payment:string;
}

export const WashFoldSchema = SchemaFactory.createForClass(WashFold);

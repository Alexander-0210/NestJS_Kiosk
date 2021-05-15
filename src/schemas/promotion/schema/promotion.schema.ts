import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PromotionDocument = Promotion & Document;

@Schema()
export class Promotion {
  @Prop()
  id:number;

  @Prop()
  price:number;

  @Prop()
  bonus:number;
}

export const PromotionSchema = SchemaFactory.createForClass(Promotion);

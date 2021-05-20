import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplyDocument = Supply & Document;

@Schema()
export class Supply {
  @Prop()
  id:number;

  @Prop()
  name:string;

  @Prop()
  img:string;

  @Prop()
  price:number;

  @Prop()
  qty:number;
}

export const SupplySchema = SchemaFactory.createForClass(Supply);

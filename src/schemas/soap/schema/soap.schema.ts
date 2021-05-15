import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SoapDocument = Soap & Document;

@Schema()
export class Soap {
  @Prop()
  id:number;

  @Prop()
  name:string;

  @Prop()
  value:number;

  @Prop()
  price:number;
}

export const SoapSchema = SchemaFactory.createForClass(Soap);

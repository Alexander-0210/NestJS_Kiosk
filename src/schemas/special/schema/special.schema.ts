import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SpecialDocument = Special & Document;

@Schema()
export class Special {
  @Prop()
  id:number;

  @Prop()
  name:string;
}

export const SpecialSchema = SchemaFactory.createForClass(Special);

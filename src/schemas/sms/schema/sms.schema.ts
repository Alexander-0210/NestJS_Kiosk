import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SmsDocument = Sms & Document;

@Schema()
export class Sms {
  @Prop()
  id:number;

  @Prop()
  phone:string;

  @Prop()
  code:string;
}

export const SmsSchema = SchemaFactory.createForClass(Sms);

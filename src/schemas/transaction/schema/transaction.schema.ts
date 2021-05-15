import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TransactionDocument = Transaction & Document;

@Schema()
export class Transaction {
  @Prop()
  id:number;

  @Prop()
  user_id:number;

  @Prop()
  reason:string;

  @Prop()
  machine_id:number;

  @Prop()
  machine_type:number;

  @Prop()
  program_id:number;

  @Prop()
  options:number;

  @Prop()
  price:number;

  @Prop()
  org_price:number;

  @Prop()
  balance:number;

  @Prop()
  method:string;

  @Prop()
  dt:Date;
}

export const TransactionSchema = SchemaFactory.createForClass(Transaction);

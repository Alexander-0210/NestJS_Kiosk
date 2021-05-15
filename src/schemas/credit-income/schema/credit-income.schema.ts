import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CreditIncomeDocument = CreditIncome & Document;

@Schema()
export class CreditIncome {
  @Prop()
  id:number;

  @Prop()
  user_id:number;

  @Prop()
  name:string;

  @Prop()
  email:string;

  @Prop()
  price:number;

  @Prop()
  detail:string;

  @Prop()
  method:string;

  @Prop()
  dt:Date;
}

export const CreditIncomeSchema = SchemaFactory.createForClass(CreditIncome);

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type KioskIncomeDocument = KioskIncome & Document;

@Schema()
export class KioskIncome {
  @Prop()
  id:number;
  
  @Prop()
  user_id:number;
  
  @Prop()
  price:number;
  
  @Prop()
  cnt:number;
  
  @Prop()
  dt:Date;

}

export const KioskIncomeSchema = SchemaFactory.createForClass(KioskIncome);

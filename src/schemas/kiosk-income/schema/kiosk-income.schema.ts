import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type KioskIncomeDocument = KioskIncome & Document;

@Schema()
export class KioskIncome {
  @Prop()
  id:number;
  
  @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'user.id' })
  user_id:number;
  
  @Prop()
  price:number;
  
  @Prop()
  cnt:number;
  
  @Prop()
  dt:Date;

}

export const KioskIncomeSchema = SchemaFactory.createForClass(KioskIncome);

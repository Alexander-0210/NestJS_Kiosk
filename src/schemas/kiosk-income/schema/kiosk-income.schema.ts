import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type KioskIncomeDocument = KioskIncome & Document;

//@ModelOptions({autoIndex: true, toJSON: {virtuals: true}})
@Schema({autoIndex: true, toJSON: {virtuals: true}})
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
  dt:string;

}

export const KioskIncomeSchema = SchemaFactory.createForClass(KioskIncome);

KioskIncomeSchema.virtual('user_phone', {
  ref: 'User',
  localField:'user_id',
  foreignField :'Id',
  //justOne: false,
  // match: { isActive: true }
});


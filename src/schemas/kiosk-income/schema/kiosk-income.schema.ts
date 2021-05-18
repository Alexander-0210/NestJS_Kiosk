import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';
import { User } from 'src/schemas/user/schema/user.schema';

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

KioskIncomeSchema.virtual('User', {
  ref: User.name,
  localField:'user_id',
  foreignField :'Id',
  justOne: false,
  // match: { isActive: true }
});
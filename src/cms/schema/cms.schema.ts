import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type CMSUserDocument = CMSUser & Document;

@Schema()
export class CMSUser{
    @Prop()
    Id:number;
    @Prop()
    phone:string;
    @Prop()
    balance:string;
    @Prop()
    uuid:string;
    @Prop()
    token:string;
    @Prop()
    card_num:string;
    @Prop()
    card_exp_date:Date;
    @Prop()
    address:string;
    @Prop()
    city:string;
    @Prop()
    state:string;
    @Prop()
    zip_code:string;
    @Prop()
    card_name:string;
}

export const CMSUserSchema = SchemaFactory.createForClass(CMSUser);

@Schema()
export class CMSKioskIncome {
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

export type CMSKioskIncomeDocument = CMSKioskIncome & Document;

export const CMSKioskIncomeSchema = SchemaFactory.createForClass(CMSKioskIncome);

CMSKioskIncomeSchema.virtual('userphone', {
    ref: 'user',
    localField:'user_id',
    foreignField :'Id',
    justOne: false,
    match: { isActive: true }
});
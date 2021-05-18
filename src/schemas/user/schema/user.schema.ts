import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, VirtualType } from 'mongoose';
import { KioskIncome } from 'src/schemas/kiosk-income/schema/kiosk-income.schema';

export type UserDocument = User & Document;

@Schema({autoIndex: true, toJSON: {virtuals: true}})
export class User{
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

export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.virtual('kiosk_price', {
    ref: 'KioskIncome',
    localField:'Id',
    foreignField :'user_id',
    //justOne: false,
    // match: { isActive: true }
  });
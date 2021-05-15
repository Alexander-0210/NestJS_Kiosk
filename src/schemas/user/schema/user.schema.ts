import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
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
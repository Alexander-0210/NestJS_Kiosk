import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserVerifyDocument = UserVerify & Document;

@Schema()
export class UserVerify {
  @Prop()
  id:number;

  @Prop()
  phone:string;

  @Prop()
  verified:number;

  @Prop()
  verify_code:string;

  @Prop()
  dt:Date;
}

export const UserVerifySchema = SchemaFactory.createForClass(UserVerify);

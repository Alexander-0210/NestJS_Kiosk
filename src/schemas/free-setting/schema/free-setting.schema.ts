import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FreeSettingDocument = FreeSetting & Document;

@Schema()
export class FreeSetting {
  @Prop()
  id:number;

  @Prop()
  user_id:number;

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
  need_sms:number;

  @Prop()
  dt:Date;

  @Prop()
  status:string;

  @Prop()
  finish_dt:Date;

  @Prop()
  dryer_used:number;
}

export const FreeSettingSchema = SchemaFactory.createForClass(FreeSetting);

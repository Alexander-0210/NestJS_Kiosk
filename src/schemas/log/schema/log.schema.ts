import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LogDocument = Log & Document;

@Schema()
export class Log {

  @Prop()
  id:number;

  @Prop()
  machine_id:number;

  @Prop()
  dt:Date;

  @Prop()
  action:string;

  @Prop()
  mod:string;

  @Prop()
  status1:number;

  @Prop()
  program:string;

  @Prop()
  options:string;

  @Prop()
  estimate_time:number;

  @Prop()
  extra_drying_time:number;

  @Prop()
  weight:number;
}

export const LogSchema = SchemaFactory.createForClass(Log);

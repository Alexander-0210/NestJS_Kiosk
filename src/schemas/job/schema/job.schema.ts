import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema()
export class Job {
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
}

export const JobSchema = SchemaFactory.createForClass(Job);

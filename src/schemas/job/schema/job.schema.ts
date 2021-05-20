import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type JobDocument = Job & Document;

@Schema({autoIndex: true, toJSON: {virtuals: true}})
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

JobSchema.virtual('user_info', {
  ref: 'User',
  localField:'user_id',
  foreignField :'Id',
  //justOne: false,
  // match: { isActive: true }
});

JobSchema.virtual('program_info', {
  ref: 'Program',
  localField:'program_id',
  foreignField :'Id',
  //justOne: false,
  // match: { isActive: true }
});
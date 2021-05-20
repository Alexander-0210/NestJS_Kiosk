import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDryerDocument = ServiceDryer & Document;

@Schema({autoIndex: true, toJSON: {virtuals: true}})
export class ServiceDryer {
  @Prop()
  id:number;

  @Prop()
  model_id:number;

  @Prop()
  dryers:number;
}

export const ServiceDryerSchema = SchemaFactory.createForClass(ServiceDryer);

ServiceDryerSchema.virtual('model_combine', {
  ref: 'Model',
  localField:'model_id',
  foreignField :'Id',
});

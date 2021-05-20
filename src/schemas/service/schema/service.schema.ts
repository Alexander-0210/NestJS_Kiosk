import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ServiceDocument = ServiceCls & Document;

@Schema()
export class ServiceCls {
  @Prop()
  id:number;

  @Prop()
  model_id:number;

  @Prop()
  program_id:number;

  @Prop()
  price:number;
}

export const ServiceSchema = SchemaFactory.createForClass(ServiceCls);

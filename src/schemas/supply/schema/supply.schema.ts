import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplyDocument = Supply & Document;

@Schema(/*{autoIndex: true, toJSON: {virtuals: true}}*/)
export class Supply {
  @Prop()
  id:number;

  @Prop()
  name:string;

  @Prop()
  img:string;

  @Prop()
  price:number;

  @Prop()
  qty:number;
}

export const SupplySchema = SchemaFactory.createForClass(Supply);
/*
SupplySchema.virtual('model_combine', {
  ref: 'Model',
  localField:'model_id',
  foreignField :'Id',
});
*/
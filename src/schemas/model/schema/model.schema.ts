import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModelDocument = ModelCls & Document;

@Schema()
export class ModelCls {
  @Prop()
  Id:number;

  @Prop()
  model:string;

  @Prop()
  type:string;

  @Prop()
  weight:number;
}

export const ModelSchema = SchemaFactory.createForClass(ModelCls);

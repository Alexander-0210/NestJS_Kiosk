import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ModelDocument = Model & Document;

@Schema()
export class Model {
  @Prop()
  id:number;

  @Prop()
  model:string;

  @Prop()
  type:string;

  @Prop()
  weight:number;
}

export const ModelSchema = SchemaFactory.createForClass(Model);

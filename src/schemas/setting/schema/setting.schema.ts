import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SettingDocument = Setting & Document;

@Schema()
export class Setting {
  @Prop()
  id:number;

  @Prop()
  keyword:string;

  @Prop()
  value:Date;
}

export const SettingSchema = SchemaFactory.createForClass(Setting);

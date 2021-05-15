import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AdminDocument = Admin & Document;

@Schema()
export class Admin {
  @Prop()
  id:number;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
  created: Date;

  @Prop()
  modified: Date;
}

export const AdminSchema = SchemaFactory.createForClass(Admin);

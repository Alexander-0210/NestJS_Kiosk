import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MachineTypeDocument = MachineType & Document;

@Schema()
export class MachineType {
  @Prop()
  id:number;

  @Prop()
  name:string;
}

export const MachineTypeSchema = SchemaFactory.createForClass(MachineType);

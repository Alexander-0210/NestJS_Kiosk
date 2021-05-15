import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProgramDocument = Program & Document;

@Schema()
export class Program {
  @Prop()
  id:number;

  @Prop()
  program:number;

  @Prop()
  name:string;

  @Prop()
  name_spain:string;

  @Prop()
  cate:string;

  @Prop()
  color:string;
}

export const ProgramSchema = SchemaFactory.createForClass(Program);

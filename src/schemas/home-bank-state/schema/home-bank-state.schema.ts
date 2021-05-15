import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeBankStateDocument = HomeBankState & Document;

@Schema()
export class HomeBankState {
  @Prop()
  id:number;

  @Prop()
  coin:number;

  @Prop()
  prev_count:number;

  @Prop()
  new_count:number;

  @Prop()
  dt:Date;
}

export const HomeBankStateSchema = SchemaFactory.createForClass(HomeBankState);

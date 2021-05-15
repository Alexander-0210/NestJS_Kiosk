import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeBankDocument = HomeBank & Document;

@Schema()
export class HomeBank {
  @Prop()
  id:number;

  @Prop()
  coin:number;
  
  @Prop()
  count:number;
  
  @Prop()
  limit_cnt:number;
  
  @Prop()
  cnt_for_set:number;
}

export const HomeBankSchema = SchemaFactory.createForClass(HomeBank);

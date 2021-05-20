import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type Kiosk2IncomeDocument = Kiosk2Income & Document;

@Schema()
export class Kiosk2Income {

  @Prop()
  id:number;
    
  @Prop()
  type:string;
    
  @Prop()
  price:number;
    
  @Prop()
  cnt:number;
    
  @Prop()
  dt:string;
    
  @Prop()
  hopper_coins:string;
}

export const Kiosk2IncomeSchema = SchemaFactory.createForClass(Kiosk2Income);

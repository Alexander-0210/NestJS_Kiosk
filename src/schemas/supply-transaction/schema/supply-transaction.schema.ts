import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SupplyTransactionDocument = SupplyTransaction & Document;

@Schema()
export class SupplyTransaction {
  @Prop()
  id:number;

  @Prop()
  dt:Date;

  @Prop()
  supply_id:number;

  @Prop()
  price:number;

  @Prop()
  count:number;

  @Prop()
  action:string;

  @Prop()
  org_qty:number;

  @Prop()
  new_qty:number;

  @Prop()
  type:string;
}

export const SupplyTransactionSchema = SchemaFactory.createForClass(SupplyTransaction);

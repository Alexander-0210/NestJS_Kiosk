import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MachineDocument = Machine & Document;

@Schema()
export class Machine {
  @Prop()
  id:number;

  @Prop()
  machine_id:number;

  @Prop()
  machine_type_id:number;

  @Prop()
  max_weight:number;

  @Prop()
  base_soft:string;

  @Prop()
  parameter_soft:string;

  @Prop()
  cpu_serial:string;

  @Prop()
  product_number:string;

  @Prop()
  serial_number:string;

  @Prop()
  baud_rate:number;

  @Prop()
  current_mode:string;

  @Prop()
  current_status1:number;

  @Prop()
  estimate_time:number;

  @Prop()
  total_time:number;

  @Prop()
  update_dt:Date;
}

export const MachineSchema = SchemaFactory.createForClass(Machine);

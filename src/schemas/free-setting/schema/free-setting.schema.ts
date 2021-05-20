import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FreeSettingDocument = FreeSetting & Document;

@Schema({autoIndex: true, toJSON: {virtuals: true}})
export class FreeSetting {
  @Prop()    
  id:number;
  
  @Prop()    
  model_id:number;
  
  @Prop()    
  consume_cnt:number;
}

export const FreeSettingSchema = SchemaFactory.createForClass(FreeSetting);

FreeSettingSchema.virtual('model_combine', {
  ref: 'Model',
  localField:'model_id',
  foreignField :'Id',
});

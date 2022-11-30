import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ timestamps: true })
export class Vehicle {
  @Prop({ unique: true })
  id: string;

  @Prop({ unique: true })
  type: string;

  @Prop()
  price: number;

  @Prop()
  name: string;

  @Prop()
  productionDate: Date;
}

export const VehicleSchema = SchemaFactory.createForClass(Vehicle);

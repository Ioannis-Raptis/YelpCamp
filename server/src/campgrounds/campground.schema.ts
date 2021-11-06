import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CampgroundDocument = Campground & Document;

@Schema()
export class Campground {
  @Prop()
  title: string;

  @Prop()
  price: string;

  @Prop()
  description: string;

  @Prop()
  location: string;
}

export const CampgroundSchema = SchemaFactory.createForClass(Campground);
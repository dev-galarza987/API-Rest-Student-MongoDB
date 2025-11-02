import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type StudentDocument = Student & Document;

@Schema({ collection: 'computing' })
export class Student {
  @Prop({ type: Types.ObjectId })
  id: Types.ObjectId;

  @Prop({ required: true, type: Number })
  code: number;

  @Prop({ required: true, type: String, name: 'full_name' })
  name: string;

  @Prop({ required: true, type: String, name: 'last_name' })
  lastname: string;

  @Prop({ required: true, type: Number, name: 'age' })
  age: number;

  @Prop({ required: true, unique: true, type: String, name: 'email' })
  email: string;

  @Prop({ required: true, type: String, name: 'password' })
  password: string;

  @Prop({ required: true, type: String, name: 'phone' })
  phone: string;

  @Prop({ required: true, type: String, name: 'career' })
  career: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);

import { PartialType } from '@nestjs/swagger';
import { CreateStudentDto } from './create-student.dto';

export class UpdateStudentDto extends PartialType(CreateStudentDto) {
  code!: number;
  name?: string;
  lastname?: string;
  age?: number;
  email?: string;
  password?: string;
  phone?: string;
  career?: string;
}

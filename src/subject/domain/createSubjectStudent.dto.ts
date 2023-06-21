import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateSubjectStudentDto {
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(2)
  semester: number;

  @IsNotEmpty()
  @IsNumber()
  subjectId: number;

  @IsNotEmpty()
  @IsNumber()
  studentId: number;
}

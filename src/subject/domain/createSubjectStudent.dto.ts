import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class CreateSubjectStudentDto {
  @ApiProperty({
    example: 2023,
  })
  @IsNotEmpty()
  @IsNumber()
  year: number;

  @ApiProperty({
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(2)
  semester: number;

  @ApiProperty({
    example: 32,
  })
  @IsNotEmpty()
  @IsNumber()
  subjectId: number;

  @ApiProperty({
    example: 21,
  })
  @IsNotEmpty()
  @IsNumber()
  studentId: number;
}

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateEvaluationDto {
  @ApiProperty({
    example: 43.4,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly score: number;

  @ApiProperty({
    example: 32,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly percentage: number;

  @ApiProperty({
    example: 2,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly subjectStudentId: number;
}

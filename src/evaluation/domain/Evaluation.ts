import { ApiProperty } from '@nestjs/swagger';
import { Evaluation as EvaluationType } from '@prisma/client';

type EvaluationParams = Omit<EvaluationType, 'id'> & { id?: number };

class Evaluation implements Readonly<Omit<EvaluationType, 'id'>> {
  @ApiProperty({
    example: 3,
  })
  readonly id?: number;

  @ApiProperty({
    example: 43.4,
  })
  readonly score: number;

  @ApiProperty({
    example: 32,
  })
  readonly percentage: number;

  @ApiProperty({
    example: 2,
  })
  readonly subjectStudentId: number;

  constructor(params: EvaluationParams) {
    this.id = params.id;
    this.score = params.score;
    this.percentage = params.percentage;
    this.subjectStudentId = params.subjectStudentId;
  }

  toJson(): EvaluationType {
    return {
      id: this.id,
      score: this.score,
      percentage: this.percentage,
      subjectStudentId: this.subjectStudentId,
    };
  }
}

export { Evaluation, EvaluationType };

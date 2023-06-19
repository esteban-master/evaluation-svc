import { Evaluation as EvaluationType } from '@prisma/client';

type EvaluationParams = Omit<EvaluationType, 'id'> & { id?: number };

class Evaluation {
  private id?: number;
  private readonly score: number;
  private readonly percentage: number;
  private readonly subjectStudentId: number;

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

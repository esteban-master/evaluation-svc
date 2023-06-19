import { Inject, Injectable } from '@nestjs/common';
import {
  EvaluationRepository,
  QueryParams,
} from '../domain/evaluationRepository';
import { Evaluation } from '../domain/Evaluation';

@Injectable()
export class EvaluationService {
  constructor(
    @Inject(EvaluationRepository)
    private readonly evaluationRepository: EvaluationRepository,
  ) {}

  async create(dto: any) {
    const { percentage, score, subjectStudentId } = dto;
    const evaluation = new Evaluation({ percentage, score, subjectStudentId });
    return await this.evaluationRepository.create(evaluation);
  }

  async get(queryParmas: QueryParams) {
    return await this.evaluationRepository.get(queryParmas);
  }
}

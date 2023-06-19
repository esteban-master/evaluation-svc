import { Prisma } from '@prisma/client';
import { Evaluation, EvaluationType } from './Evaluation';

export type QueryParams = {
  orderBy: keyof Prisma.EvaluationOrderByWithRelationInput;
  order: 'asc' | 'desc';
  studentId: string;
};

export interface EvaluationRepository {
  create(evaluation: Evaluation): Promise<EvaluationType>;
  get(params: QueryParams): Promise<EvaluationType[]>;
}

export const EvaluationRepository = Symbol('EvaluationRepository');

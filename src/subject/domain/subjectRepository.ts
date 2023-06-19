import { Prisma } from '@prisma/client';
import { Subject, SubjectType } from './Subject';

export type QueryParams = {
  orderBy: keyof Prisma.SubjectOrderByWithRelationInput;
  order: 'asc' | 'desc';
};

export interface SubjectRepository {
  create(subject: Subject): Promise<SubjectType>;
  get(params: QueryParams): Promise<SubjectType[]>;
}

export const SubjectRepository = Symbol('SubjectRepository');

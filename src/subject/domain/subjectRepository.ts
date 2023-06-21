import { Prisma, SubjectStudent } from '@prisma/client';
import { Subject, SubjectType } from './Subject';
import { CreateSubjectStudentDto } from './createSubjectStudent.dto';

export type QueryParams = {
  orderBy: keyof Prisma.SubjectOrderByWithRelationInput;
  order: 'asc' | 'desc';
};

export interface SubjectRepository {
  create(subject: Subject): Promise<SubjectType>;
  get(params: QueryParams): Promise<SubjectType[]>;
  addSubjectStudent(
    createSubjectStudentDto: CreateSubjectStudentDto,
  ): Promise<SubjectStudent>;
  getSubjectStudent(studentId: number): Promise<SubjectStudent[]>;
}

export const SubjectRepository = Symbol('SubjectRepository');

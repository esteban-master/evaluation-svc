import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryParams, SubjectRepository } from '../domain/subjectRepository';
import { Subject, SubjectType } from '../domain/Subject';
import { PrismaService } from 'src/config/database/prisma.service';
import { SubjectStudent } from '@prisma/client';
import { CreateSubjectStudentDto } from '../domain/createSubjectStudent.dto';

@Injectable()
export class SubjectRepositoryService implements SubjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(subject: Subject): Promise<SubjectType> {
    try {
      const { color, name } = subject.toJson();
      const create = await this.prismaService.subject.create({
        data: { color, name },
      });
      return create;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async get(params: QueryParams): Promise<SubjectType[]> {
    return await this.prismaService.subject.findMany({
      orderBy: {
        [params.orderBy]: params.order,
      },
    });
  }

  async addSubjectStudent(
    createSubjectStudentDto: CreateSubjectStudentDto,
  ): Promise<SubjectStudent> {
    try {
      const { semester, studentId, subjectId, year } = createSubjectStudentDto;
      const create = await this.prismaService.subjectStudent.create({
        data: { semester, studentId, subjectId, year },
      });
      return create;
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  async getSubjectStudent(studentId: number): Promise<SubjectStudent[]> {
    return await this.prismaService.subjectStudent.findMany({
      where: { studentId },
    });
  }
}

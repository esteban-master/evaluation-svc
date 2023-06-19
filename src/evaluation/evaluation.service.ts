import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Evaluation, Prisma } from '@prisma/client';
import { PrismaService } from 'src/config/database/prisma.service';

type QueryParams = {
  orderBy: keyof Prisma.EvaluationOrderByWithRelationInput;
  order: 'asc' | 'desc';
  studentId: string;
};

@Injectable()
export class EvaluationService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(dto: any): Promise<Evaluation> {
    const { percentage, score, subjectStudentId } = dto;

    const subjectStudent = await this.prismaService.subjectStudent.findUnique({
      where: { id: subjectStudentId },
    });

    if (subjectStudent) {
      try {
        const create = await this.prismaService.evaluation.create({
          data: { percentage, score, subjectStudentId },
        });

        return create;
      } catch (error) {
        throw new InternalServerErrorException(error.message);
      }
    }

    throw new BadRequestException('Asignatura de estudiante no válida');
  }

  async get(query: QueryParams) {
    const { studentId, order, orderBy } = query;

    return this.prismaService.evaluation.findMany({
      where: {
        subjectStudent: {
          studentId: studentId ? parseInt(studentId) : undefined,
        },
      },
      orderBy: {
        [orderBy]: order,
      },
    });
  }
}

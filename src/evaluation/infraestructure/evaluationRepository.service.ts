import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import {
  EvaluationRepository,
  QueryParams,
} from '../domain/evaluationRepository.interface';
import { Evaluation, EvaluationType } from '../domain/Evaluation';
import { PrismaService } from 'src/config/database/prisma.service';

@Injectable()
export class EvaluationRepositoryService implements EvaluationRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async get(queryParams: QueryParams): Promise<EvaluationType[]> {
    const { studentId, order, orderBy } = queryParams;

    return await this.prismaService.evaluation.findMany({
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

  async create(evaluation: Evaluation): Promise<EvaluationType> {
    const { percentage, score, subjectStudentId } = evaluation.toJson();

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

    throw new BadRequestException(['Asignatura de estudiante no válida']);
  }
}

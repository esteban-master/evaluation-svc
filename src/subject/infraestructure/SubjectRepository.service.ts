import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { QueryParams, SubjectRepository } from '../domain/subjectRepository';
import { Subject, SubjectType } from '../domain/Subject';
import { PrismaService } from 'src/config/database/prisma.service';

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
}

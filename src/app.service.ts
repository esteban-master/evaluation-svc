import { Injectable } from '@nestjs/common';
import { PrismaService } from './config/database/prisma.service';

@Injectable()
export class AppService {
  constructor(private readonly prismaService: PrismaService) {}
  async getHello() {
    return this.prismaService.student.findUnique({
      where: { id: 1 },
      include: {
        subjectStudents: {
          where: { year: 2023 },
          include: { evaluations: true, subject: true },
        },
      },
    });
  }
}

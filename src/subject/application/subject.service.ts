import { Inject, Injectable } from '@nestjs/common';
import { SubjectRepository } from '../domain/subjectRepository';
import { Subject } from '../domain/Subject';

@Injectable()
export class SubjectService {
  constructor(
    @Inject(SubjectRepository)
    private readonly subjectRepository: SubjectRepository,
  ) {}

  async create({ color, name }: any) {
    const subject = new Subject({ color, name });
    return await this.subjectRepository.create(subject);
  }

  async get(query: any) {
    return await this.subjectRepository.get(query);
  }

  async addSubjectStudent(subjectStudent: any) {
    return await this.subjectRepository.addSubjectStudent(subjectStudent);
  }

  async getSubjectStudent(studentId: number) {
    return await this.subjectRepository.getSubjectStudent(studentId);
  }
}

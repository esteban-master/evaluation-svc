import { Module } from '@nestjs/common';
import { SubjectService } from './application/subject.service';
import { SubjectController } from './infraestructure/subject.controller';
import { DatabaseModule } from 'src/config/database/database.module';
import { SubjectRepository } from './domain/subjectRepository';
import { SubjectRepositoryService } from './infraestructure/SubjectRepository.service';

@Module({
  imports: [DatabaseModule],
  controllers: [SubjectController],
  providers: [
    SubjectService,
    { provide: SubjectRepository, useClass: SubjectRepositoryService },
  ],
})
export class SubjectModule {}

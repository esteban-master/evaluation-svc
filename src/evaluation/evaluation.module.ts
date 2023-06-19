import { Module } from '@nestjs/common';
import { EvaluationService } from './application/evaluation.service';
import { DatabaseModule } from 'src/config/database/database.module';
import { EvaluationController } from './infraestructure/evaluation.controller';
import { EvaluationRepository } from './domain/evaluationRepository';
import { EvaluationRepositoryService } from './infraestructure/evaluationRepository.service';
@Module({
  imports: [DatabaseModule],
  providers: [
    EvaluationService,
    { provide: EvaluationRepository, useClass: EvaluationRepositoryService },
  ],
  controllers: [EvaluationController],
})
export class EvaluationModule {}

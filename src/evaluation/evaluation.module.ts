import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { DatabaseModule } from 'src/config/database/database.module';
import { EvaluationController } from './evaluation.controller';

@Module({
  imports: [DatabaseModule],
  providers: [EvaluationService],
  controllers: [EvaluationController],
})
export class EvaluationModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { SubjectModule } from './subject/subject.module';
import { EvaluationModule } from './evaluation/evaluation.module';
@Module({
  imports: [DatabaseModule, SubjectModule, EvaluationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './config/database/database.module';
import { SubjectModule } from './subject/subject.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { PubsubModule } from './pubsub/pubsub.module';
import { ConfigModule } from '@nestjs/config';
import commonEnvConfig from './config/commonEnv.config';
import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [commonEnvConfig],
      isGlobal: true,
      validationSchema: Joi.object({
        PROJECT_ID: Joi.string().required(),
        PUB_SUB_TOPIC_ID: Joi.string().required(),
        PUB_SUB_SUBSCRIPTION_ID: Joi.string().required(),
        DATABASE_URL: Joi.string().required(),
      }),
    }),
    DatabaseModule,
    SubjectModule,
    EvaluationModule,
    PubsubModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

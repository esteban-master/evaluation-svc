import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EvaluationService } from '../application/evaluation.service';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import { QueryParams } from '../domain/evaluationRepository.interface';
import { CreateEvaluationDto } from '../domain/createEvaluation.dto';
import { Evaluation } from '../domain/Evaluation';
import { ApiExecption } from 'src/common/ApiException';

@ApiTags('Evaluation')
@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @ApiQuery({
    name: 'orderBy',
    enum: ['score', 'percentage'],
  })
  @ApiQuery({
    name: 'order',
    enum: ['asc', 'desc'],
  })
  @ApiQuery({
    name: 'studentId',
  })
  @Get()
  async get(@Query() query: QueryParams) {
    return await this.evaluationService.get(query);
  }

  @ApiCreatedResponse({
    type: Evaluation,
  })
  @ApiBadRequestResponse({
    type: ApiExecption,
  })
  @Post()
  async create(@Body() dto: CreateEvaluationDto) {
    return await this.evaluationService.create(dto);
  }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Get()
  async get(@Query() query: any) {
    return await this.evaluationService.get(query);
  }

  @Post()
  async create(@Body() dto: any) {
    return await this.evaluationService.create(dto);
  }
}

import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { SubjectService } from '../application/subject.service';

@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  get(@Query() query: any) {
    return this.subjectService.get(query);
  }

  @Post()
  create(@Body() body: any) {
    return this.subjectService.create(body);
  }
}

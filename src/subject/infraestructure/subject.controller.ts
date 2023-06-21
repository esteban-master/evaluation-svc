import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { SubjectService } from '../application/subject.service';
import { CreateSubjectStudentDto } from '../domain/createSubjectStudent.dto';

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

  @Post('/student')
  addSubjectStudent(@Body() createSubjectStudentDto: CreateSubjectStudentDto) {
    return this.subjectService.addSubjectStudent(createSubjectStudentDto);
  }

  @Get('/student/:id')
  getSubjectStudent(@Param('id', ParseIntPipe) id: number) {
    return this.subjectService.getSubjectStudent(id);
  }
}

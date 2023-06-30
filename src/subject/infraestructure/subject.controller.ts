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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Subject } from '../domain/Subject';
import { SubjectStudent } from '../domain/SubjectStudent';

@ApiTags('Subject')
@Controller('subject')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @ApiOkResponse({
    type: [Subject],
  })
  @Get()
  get(@Query() query: any) {
    return this.subjectService.get(query);
  }

  @ApiOperation({
    summary: 'Crear asignatura',
    description: 'Asignatura para poder ingresar las evaluaciones',
  })
  @ApiCreatedResponse({
    description: 'Nueva asignatura',
    type: Subject,
  })
  @Post()
  create(@Body() body: any) {
    return this.subjectService.create(body);
  }

  @ApiOperation({
    summary: 'Vincular asignatura con un estudiante',
    description:
      'Vincular asignatura a un estudiante según el año y el semestre que este cursando',
  })
  @ApiCreatedResponse({
    type: SubjectStudent,
  })
  @Post('/student')
  addSubjectStudent(@Body() createSubjectStudentDto: CreateSubjectStudentDto) {
    return this.subjectService.addSubjectStudent(createSubjectStudentDto);
  }

  @ApiOperation({
    summary: 'Obtener asignaturas de un estudiante',
  })
  @ApiParam({
    name: 'studentId',
  })
  @ApiOkResponse({
    type: [SubjectStudent],
  })
  @Get('/student/:studentId')
  getSubjectStudent(@Param('studentId', ParseIntPipe) studentId: number) {
    return this.subjectService.getSubjectStudent(studentId);
  }
}

import { ApiProperty } from '@nestjs/swagger';
import { SubjectStudent as SubjectStudentType } from '@prisma/client';

type SubjectStudentParams = Omit<SubjectStudentType, 'id'> & { id?: number };

class SubjectStudent implements Readonly<Omit<SubjectStudentType, 'id'>> {
  @ApiProperty({
    example: 12,
  })
  readonly id?: number;
  @ApiProperty({
    example: 2023,
  })
  readonly year: number;
  @ApiProperty({
    example: 2,
  })
  readonly semester: number;
  @ApiProperty({
    example: 21,
  })
  readonly subjectId: number;
  @ApiProperty({
    example: 32,
  })
  readonly studentId: number;

  constructor(params: SubjectStudentParams) {
    this.id = params.id;
    this.semester = params.semester;
    this.studentId = params.studentId;
    this.subjectId = params.subjectId;
    this.year = params.year;
  }

  toJson(): SubjectStudentType {
    return {
      id: this.id,
      semester: this.semester,
      studentId: this.studentId,
      subjectId: this.subjectId,
      year: this.year,
    };
  }
}

export { SubjectStudent, SubjectStudentType };

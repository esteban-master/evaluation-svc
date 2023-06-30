import { ApiProperty } from '@nestjs/swagger';
import { Subject as SubjectType } from '@prisma/client';

type SubjectParams = Omit<SubjectType, 'id'> & { id?: number };

class Subject implements Readonly<Omit<SubjectType, 'id'>> {
  @ApiProperty({
    example: 12,
  })
  readonly id?: number;
  @ApiProperty({
    example: 'Matemáticas',
  })
  readonly name: string;
  @ApiProperty({
    example: '#FF5733',
  })
  readonly color: string;

  constructor(params: SubjectParams) {
    this.id = params.id;
    this.color = params.color;
    this.name = params.name;
  }

  toJson(): SubjectType {
    return {
      id: this.id,
      name: this.name,
      color: this.color,
    };
  }
}

export { Subject, SubjectType };

import {Entity, model, property} from '@loopback/repository';

@model()
export class NotasEstudiante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  estudianteId: number;

  @property({
    type: 'number',
    required: true,
  })
  materiaId: number;

  @property({
    type: 'number',
    required: true,
  })
  nota: number;


  constructor(data?: Partial<NotasEstudiante>) {
    super(data);
  }
}

export interface NotasEstudianteRelations {

}

export type NotasEstudianteWithRelations = NotasEstudiante & NotasEstudianteRelations;

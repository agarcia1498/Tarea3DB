import {Entity, model, property} from '@loopback/repository';

@model()
export class DataEstudiante extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  carrera: string;


  constructor(data?: Partial<DataEstudiante>) {
    super(data);
  }
}

export interface DataEstudianteRelations {
  
}

export type DataEstudianteWithRelations = DataEstudiante & DataEstudianteRelations;

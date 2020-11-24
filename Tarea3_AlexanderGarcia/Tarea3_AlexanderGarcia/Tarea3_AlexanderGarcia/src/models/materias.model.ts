import {Entity, model, property} from '@loopback/repository';

@model()
export class Materias extends Entity {
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


  constructor(data?: Partial<Materias>) {
    super(data);
  }
}

export interface MateriasRelations {

}

export type MateriasWithRelations = Materias & MateriasRelations;

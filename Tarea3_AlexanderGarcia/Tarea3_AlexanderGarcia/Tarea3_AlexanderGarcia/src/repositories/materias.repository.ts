import {DefaultCrudRepository} from '@loopback/repository';
import {Materias, MateriasRelations} from '../models';
import {T3mssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class MateriasRepository extends DefaultCrudRepository<
  Materias,
  typeof Materias.prototype.id,
  MateriasRelations
> {
  constructor(
    @inject('datasources.T3mssql') dataSource: T3mssqlDataSource,
  ) {
    super(Materias, dataSource);
  }
}

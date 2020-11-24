import {DefaultCrudRepository} from '@loopback/repository';
import {NotasEstudiante, NotasEstudianteRelations} from '../models';
import {T3mssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class NotasEstudianteRepository extends DefaultCrudRepository<
  NotasEstudiante,
  typeof NotasEstudiante.prototype.id,
  NotasEstudianteRelations
> {
  constructor(
    @inject('datasources.T3mssql') dataSource: T3mssqlDataSource,
  ) {
    super(NotasEstudiante, dataSource);
  }
}

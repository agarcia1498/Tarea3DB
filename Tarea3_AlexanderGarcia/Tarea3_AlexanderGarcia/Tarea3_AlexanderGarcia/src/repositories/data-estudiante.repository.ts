import {DefaultCrudRepository} from '@loopback/repository';
import {DataEstudiante, DataEstudianteRelations} from '../models';
import {T3mssqlDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class DataEstudianteRepository extends DefaultCrudRepository<
  DataEstudiante,
  typeof DataEstudiante.prototype.id,
  DataEstudianteRelations
> {
  constructor(
    @inject('datasources.T3mssql') dataSource: T3mssqlDataSource,
  ) {
    super(DataEstudiante, dataSource);
  }
}

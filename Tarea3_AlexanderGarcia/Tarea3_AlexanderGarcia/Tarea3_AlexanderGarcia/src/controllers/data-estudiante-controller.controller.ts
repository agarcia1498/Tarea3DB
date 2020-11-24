import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {DataEstudiante} from '../models';
import {DataEstudianteRepository} from '../repositories';

export class DataEstudianteControllerController {
  constructor(
    @repository(DataEstudianteRepository)
    public dataEstudianteRepository : DataEstudianteRepository,
  ) {}

  @post('/data-estudiantes', {
    responses: {
      '200': {
        description: 'DataEstudiante model instance',
        content: {'application/json': {schema: getModelSchemaRef(DataEstudiante)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataEstudiante, {
            title: 'NewDataEstudiante',
            
          }),
        },
      },
    })
    dataEstudiante: DataEstudiante,
  ): Promise<DataEstudiante> {
    return this.dataEstudianteRepository.create(dataEstudiante);
  }

  @get('/data-estudiantes/count', {
    responses: {
      '200': {
        description: 'DataEstudiante model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(DataEstudiante) where?: Where<DataEstudiante>,
  ): Promise<Count> {
    return this.dataEstudianteRepository.count(where);
  }

  @get('/data-estudiantes', {
    responses: {
      '200': {
        description: 'Array of DataEstudiante model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(DataEstudiante, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(DataEstudiante) filter?: Filter<DataEstudiante>,
  ): Promise<DataEstudiante[]> {
    return this.dataEstudianteRepository.find(filter);
  }

  @patch('/data-estudiantes', {
    responses: {
      '200': {
        description: 'DataEstudiante PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataEstudiante, {partial: true}),
        },
      },
    })
    dataEstudiante: DataEstudiante,
    @param.where(DataEstudiante) where?: Where<DataEstudiante>,
  ): Promise<Count> {
    return this.dataEstudianteRepository.updateAll(dataEstudiante, where);
  }

  @get('/data-estudiantes/{id}', {
    responses: {
      '200': {
        description: 'DataEstudiante model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(DataEstudiante, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(DataEstudiante, {exclude: 'where'}) filter?: FilterExcludingWhere<DataEstudiante>
  ): Promise<DataEstudiante> {
    return this.dataEstudianteRepository.findById(id, filter);
  }

  @patch('/data-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DataEstudiante PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(DataEstudiante, {partial: true}),
        },
      },
    })
    dataEstudiante: DataEstudiante,
  ): Promise<void> {
    await this.dataEstudianteRepository.updateById(id, dataEstudiante);
  }

  @put('/data-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DataEstudiante PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() dataEstudiante: DataEstudiante,
  ): Promise<void> {
    await this.dataEstudianteRepository.replaceById(id, dataEstudiante);
  }

  @del('/data-estudiantes/{id}', {
    responses: {
      '204': {
        description: 'DataEstudiante DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.dataEstudianteRepository.deleteById(id);
  }
}

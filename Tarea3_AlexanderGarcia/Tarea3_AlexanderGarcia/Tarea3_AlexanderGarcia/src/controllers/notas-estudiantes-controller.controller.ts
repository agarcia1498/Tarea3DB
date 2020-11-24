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
import {NotasEstudiantes} from '../models';
import {NotasEstudiantesRepository} from '../repositories';

export class NotasEstudiantesControllerController {
  constructor(
    @repository(NotasEstudiantesRepository)
    public notasEstudiantesRepository : NotasEstudiantesRepository,
  ) {}

  @post('/notas-estudiantes', {
    responses: {
      '200': {
        description: 'NotasEstudiantes model instance',
        content: {'application/json': {schema: getModelSchemaRef(NotasEstudiantes)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiantes, {
            title: 'NewNotasEstudiante',
            
          }),
        },
      },
    })
    notasEstudiantes: NotasEstudiantes,
  ): Promise<NotasEstudiantes> {
    return this.notasEstudiantesRepository.create(notasEstudiantes);
  }

  @get('/notas-estudiantess/count', {
    responses: {
      '200': {
        description: 'NotasEstudiantes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(NotasEstudiantes) where?: Where<NotasEstudiantes>,
  ): Promise<Count> {
    return this.notasEstudiantesRepository.count(where);
  }

  @get('/notas-estudiantess', {
    responses: {
      '200': {
        description: 'Array of NotasEstudiantes model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(NotasEstudiantes, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(NotasEstudiantes) filter?: Filter<NotasEstudiantes>,
  ): Promise<NotasEstudiantes[]> {
    return this.notasEstudiantesRepository.find(filter);
  }

  @patch('/notas-estudiantess', {
    responses: {
      '200': {
        description: 'NotasEstudiantes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiantes, {partial: true}),
        },
      },
    })
    notasEstudiante: NotasEstudiante,
    @param.where(NotasEstudiantes) where?: Where<NotasEstudiantes>,
  ): Promise<Count> {
    return this.notasEstudiantesRepository.updateAll(notasEstudiantes, where);
  }

  @get('/notas-estudiantess/{id}', {
    responses: {
      '200': {
        description: 'NotasEstudiantes model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(NotasEstudiantes, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(NotasEstudiantes, {exclude: 'where'}) filter?: FilterExcludingWhere<NotasEstudiantes>
  ): Promise<NotasEstudiantes> {
    return this.notasEstudiantesRepository.findById(id, filter);
  }

  @patch('/notas-estudiantess/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiantes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(NotasEstudiantes, {partial: true}),
        },
      },
    })
    notasEstudiantes: NotasEstudiantes,
  ): Promise<void> {
    await this.notasEstudiantesRepository.updateById(id, notasEstudiante);
  }

  @put('/notas-estudiantess/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiantes PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() notasEstudiantes: NotasEstudiantes,
  ): Promise<void> {
    await this.notasEstudiantesRepository.replaceById(id, notasEstudiantes);
  }

  @del('/notas-estudiantess/{id}', {
    responses: {
      '204': {
        description: 'NotasEstudiantes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.notasEstudiantesRepository.deleteById(id);
  }
}

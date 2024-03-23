// Importações necessárias para o teste
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

// Descreve o conjunto de testes para o CategoryController
describe('CategoryController (/categories)', () => {
  let app: INestApplication;

  // Antes de cada teste, cria uma instância do aplicativo
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  // Teste para verificar a criação de uma nova categoria
  it('Deve criar uma nova categoria', async () => { 
    const newCategory = {
      name: 'Nova Categoria',
      color: '#FF0000'
    };

    // Realiza uma solicitação POST para criar uma nova categoria
    const response = await request(app.getHttpServer())
      .post('/categories')
      .send(newCategory)
      .expect(201);

    // Verifica se a resposta contém os dados da categoria criada
    expect(response.body).toEqual(expect.objectContaining(newCategory));
  });

  // Após cada teste, fecha a instância do aplicativo
  afterAll(async () => {
    await app.close();
  });
});

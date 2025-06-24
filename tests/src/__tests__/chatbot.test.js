// tests/src/__tests__/chatbot.test.js
const request = require('supertest');
const express = require('express');
const bodyParser = require('body-parser');

jest.mock('../../../src/services/cohere.service');
const { callCohere } = require('../../../src/services/cohere.service');
const { generarIA } = require('../../../src/controllers/chatbot.controller');

const app = express();
app.use(bodyParser.json());
app.post('/chatbot', generarIA);

describe('🤖 Generación IA de planes - chatbot.controller', () => {
  const validPayload = {
    tipo: 'dieta',
    peso: 70,
    estatura: 175,
    actividad: 'moderada',
    objetivo: 'bajar de peso',
    edad: 28,
  };

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('✅ Retorna respuesta correctamente si los datos son válidos', async () => {
    const respuestaMock = 'Aquí tienes tu plan de dieta personalizado.';
    callCohere.mockResolvedValue(respuestaMock);

    const res = await request(app).post('/chatbot').send(validPayload);

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ respuesta: respuestaMock });
    expect(callCohere).toHaveBeenCalledWith(validPayload);
  });

  it('🚫 Retorna error 400 si faltan campos obligatorios', async () => {
    const { edad, ...payloadIncompleto } = validPayload;

    const res = await request(app).post('/chatbot').send(payloadIncompleto);

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty('error');
    expect(callCohere).not.toHaveBeenCalled();
  });

  it('❌ Retorna error 500 si ocurre un error interno', async () => {
    callCohere.mockRejectedValue(new Error('Fallo de Cohere API'));

    const res = await request(app).post('/chatbot').send(validPayload);

    expect(res.status).toBe(500);
    expect(res.body).toHaveProperty('error');
    expect(callCohere).toHaveBeenCalled();
  });
});

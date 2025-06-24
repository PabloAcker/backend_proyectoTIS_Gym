const express = require('express');
const request = require('supertest');
const bodyParser = require('body-parser');
const membershipController = require('../../../src/controllers/membership.controller');

const app = express();
app.use(bodyParser.json());
app.post('/memberships', membershipController.createMembership);

describe('Membership Controller - createMembership', () => {
  test('✅ debería crear una membresía con datos válidos', async () => {
    const response = await request(app).post('/memberships').send({
      name: 'Mensual Básico',
      description: 'Acceso completo al gimnasio',
      duration: '30',
      price: 100,
      status: true
    });

    expect(response.status).toBe(201);
    expect(response.body.message).toBe('Membresía creada exitosamente');
    expect(response.body.membership).toMatchObject({
      name: 'Mensual Básico',
      description: 'Acceso completo al gimnasio',
      duration: '30',
      price: 100,
      status: true
    });
  });
});

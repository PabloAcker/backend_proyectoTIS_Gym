// tests/src/__tests__/subscription.test.js
const express = require('express');
const bodyParser = require('body-parser');
const request = require('supertest');
const prisma = require('../__mocks__/prismaMock');

const app = express();
app.use(bodyParser.json());

// Endpoint simulado
app.post('/subscriptions/request', async (req, res) => {
  const { userId, membershipId, proofFile, finalPrice } = req.body;

  if (!userId || !membershipId || !proofFile || typeof finalPrice !== 'number') {
    return res.status(400).json({ error: 'Faltan datos obligatorios' });
  }

  if (finalPrice <= 0) {
    return res.status(400).json({ error: 'El precio final debe ser válido' });
  }

  const existing = await prisma.subscriptions.findFirst({ where: { user_id: userId } });
  if (existing) {
    return res.status(400).json({ error: 'Ya tienes una suscripción activa o pendiente' });
  }

  const newSub = await prisma.subscriptions.create({
    data: {
      user_id: userId,
      membership_id: membershipId,
      proof_file: proofFile,
      final_price: finalPrice,
      start_date: new Date(),
      end_date: new Date(),
      state: 'pendiente',
    },
  });

  res.status(201).json({ subscription: newSub });
});

describe('🧪 Suscripciones', () => {
  let user;
  let membership;

  beforeAll(async () => {
    user = await prisma.users.create({
      data: {
        name: 'Test',
        last_name: 'User',
        email: `test${Date.now()}@test.com`,
        password_hash: '123456',
        role_id: 2,
      },
    });

    membership = await prisma.memberships.create({
      data: {
        name: 'Mensual Test',
        price: 100,
        duration: 1,
      },
    });
  });

  afterAll(async () => {
    await prisma.subscriptions.deleteMany({ where: { user_id: user.id } });
    await prisma.memberships.delete({ where: { id: membership.id } });
    await prisma.users.delete({ where: { id: user.id } });
    await prisma.clients.deleteMany({ where: { user_id: user.id } });
    await prisma.$disconnect();
  });

  it('✅ Crea una suscripción correctamente', async () => {
    const res = await request(app).post('/subscriptions/request').send({
      userId: user.id,
      membershipId: membership.id,
      proofFile: 'prueba123.png',
      finalPrice: 90,
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.subscription).toHaveProperty('id');
    expect(res.body.subscription.state).toBe('pendiente');
  });

  it('🚫 No permite crear si ya hay una pendiente o aprobada', async () => {
    const res = await request(app).post('/subscriptions/request').send({
      userId: user.id,
      membershipId: membership.id,
      proofFile: 'otra.png',
      finalPrice: 90,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/suscripción activa o pendiente/);
  });

  it('🚫 No permite crear con datos faltantes', async () => {
    const res = await request(app).post('/subscriptions/request').send({
      userId: user.id,
      membershipId: membership.id,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/Faltan datos obligatorios/);
  });

  it('🚫 No permite precio inválido', async () => {
    const res = await request(app).post('/subscriptions/request').send({
      userId: user.id,
      membershipId: membership.id,
      proofFile: 'prueba.png',
      finalPrice: -5,
    });

    expect(res.statusCode).toBe(400);
    expect(res.body.error).toMatch(/precio final.*válido/i);
  });
});

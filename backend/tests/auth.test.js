import request from 'supertest';
import app from '../src/app.js';
import { closeDB } from '../src/db.js';

describe('Auth API', () => {

  it('should register a new user', async () => {
    const email = `test${Date.now()}@example.com`;

    const res = await request(app)
      .post('/api/auth/register')
      .send({
        name: 'Test User',
        email,
        password: 'password123',
        role: 'USER',
      });

    expect(res.statusCode).toBe(201);
  });

  it('should login an existing user', async () => {
    const email = `login${Date.now()}@example.com`;

    await request(app).post('/api/auth/register').send({
      name: 'Login User',
      email,
      password: 'password123',
      role: 'USER',
    });

    const res = await request(app)
      .post('/api/auth/login')
      .send({
        email,
        password: 'password123',
      });

    expect(res.statusCode).toBe(200);
    expect(res.body.token).toBeDefined();
  });

});

afterAll(async () => {
  await closeDB();
});

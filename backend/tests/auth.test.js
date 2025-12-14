import request from 'supertest';
import app from '../src/app.js';

describe('Auth API', () => {
  it('should register a user', async () => {
    const res = await request(app).post('/api/auth/register').send({
      name: 'Test User',
      email: 'test@demo.com',
      password: 'password123'
    });

    expect(res.statusCode).toBe(201);
  });
});

import request from 'supertest';
import app from '../src/app.js';
import { closeDB } from '../src/db.js';

let token;
let email;

beforeAll(async () => {
  email = `sweet${Date.now()}@test.com`;

  // register user
  await request(app).post('/api/auth/register').send({
    name: 'Sweet Tester',
    email,
    password: 'password123',
    role: 'USER',
  });

  // login user
  const res = await request(app).post('/api/auth/login').send({
    email,
    password: 'password123',
  });

  token = res.body.token;
});

describe('Sweets API', () => {
  it('should get sweets list (authorized)', async () => {
    const res = await request(app)
      .get('/api/sweets')
      .set('Authorization', `Bearer ${token}`);

    expect(res.statusCode).toBe(200);
  });
});

afterAll(async () => {
  await closeDB();
});

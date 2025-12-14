import request from 'supertest';
import app from '../src/app.js';

describe('Sweets API', () => {
  it('should block access without token', async () => {
    const res = await request(app).get('/api/sweets');
    expect(res.statusCode).toBe(401);
  });
});

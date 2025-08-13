import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../../src/app';

describe('GET /api/v1/todos', () => {
  it('response with 200 OK', async () => {
    const res = await request(app).get('/api/v1/todos');
    expect(res.statusCode).toBe(200);
  });

  it('response with json', async () => {
    const res = await request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('response with array', async () => {
    const res = await request(app)
      .get('/api/v1/todos')
      .set('Accept', 'application/json');
    expect(res.body).toBeInstanceOf(Array);
  });
});

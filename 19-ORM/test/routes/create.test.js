import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../../src/app';

const todoMock = {
  title: 'Works',
  completed: false,
};

describe('POST /api/v1/todos', () => {
  it('response with 201 CREATED', async () => {
    const res = await request(app).post('/api/v1/todos').send(todoMock);
    expect(res.statusCode).toBe(201);
  });

  it('response with json', async () => {
    const res = await request(app)
      .post('/api/v1/todos')
      .send(todoMock)
      .set('Accept', 'application/json');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('response with created todo', async () => {
    const res = await request(app)
      .post('/api/v1/todos')
      .send(todoMock)
      .set('Accept', 'application/json');
    expect(res.body.id).toBeDefined();
    expect(typeof res.body.id).toBe('number');
    expect(res.body).toMatchObject(todoMock);
  });
});

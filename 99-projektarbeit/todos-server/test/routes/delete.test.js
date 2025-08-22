import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import app from '../../src/app';

const todoMock = {
  title: 'To be deleted',
  completed: true,
};

describe('DELETE /api/v1/todos', () => {
  let createdId;

  beforeEach(async () => {
    const res = await request(app).post('/api/v1/todos').send(todoMock);
    createdId = res.body.id;
  });

  it('response with 204 NO CONTENT', async () => {
    const res = await request(app).delete(`/api/v1/todos/${createdId}`);
    expect(res.statusCode).toBe(204);
  });
});

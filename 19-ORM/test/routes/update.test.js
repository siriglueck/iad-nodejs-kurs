import request from 'supertest';
import { beforeEach, describe, expect, it } from 'vitest';
import app from '../../src/app';

const todoMock = {
  title: 'To be updated',
  completed: true,
};

describe('PATCH /api/v1/todos', () => {
  let createdId;

  beforeEach(async () => {
    const res = await request(app).post('/api/v1/todos').send(todoMock);
    createdId = res.body.id;
  });

  it('response with 200 OK', async () => {
    const res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ title: 'Updated' });
    expect(res.statusCode).toBe(200);
  });

  it('response with json', async () => {
    const res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ title: 'Updated' })
      .set('Accept', 'application/json');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('response patched todo with only title changed', async () => {
    const res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ title: 'Updated' })
      .set('Accept', 'application/json');
    expect(res.body).toMatchObject({
      ...todoMock,
      id: createdId,
      title: 'Updated',
    });
  });

  it('response patched todo with only completed changed', async () => {
    const res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ completed: false })
      .set('Accept', 'application/json');
    expect(res.body).toMatchObject({
      ...todoMock,
      id: createdId,
      completed: false,
    });
  });

  it('response patched todo with all props changed but id', async () => {
    const res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ completed: false, title: 'Updated', id: createdId + 1000 })
      .set('Accept', 'application/json');
    expect(res.body).toMatchObject({
      id: createdId,
      title: 'Updated',
      completed: false,
    });
  });
});

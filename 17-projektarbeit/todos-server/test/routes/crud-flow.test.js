import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../../src/app';

const todoMock = {
  title: 'Created',
  completed: false,
};

describe('A CRUD flow', () => {
  let createdId;

  it('gets back the created todo', async () => {
    let res = await request(app).post('/api/v1/todos').send(todoMock);
    createdId = res.body.id;

    res = await request(app).get('/api/v1/todos');
    expect(res.body).toContainEqual({ id: createdId, ...todoMock });
  });

  it('gets back the updated todo', async () => {
    let res = await request(app)
      .patch(`/api/v1/todos/${createdId}`)
      .send({ completed: true, title: 'Updated' });

    res = await request(app).get('/api/v1/todos');
    expect(res.body).toContainEqual({
      id: createdId,
      title: 'Updated',
      completed: true,
    });
  });

  it('does not get back the deleted todo', async () => {
    let res = await request(app).delete(`/api/v1/todos/${createdId}`);

    res = await request(app).get('/api/v1/todos');
    expect(res.body.find((t) => t.id === createdId)).toBeFalsy();
  });
});

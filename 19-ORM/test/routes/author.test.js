import fs from 'node:fs/promises';
import request from 'supertest';
import { beforeAll, describe, expect, it } from 'vitest';
import app from '../../src/app';

describe('GET /api/v1/author', () => {
  let author;

  beforeAll(async () => {
    const data = await fs.readFile('data/author.txt');
    const [name, url] = data.toString().trim().split(',');
    author = { name, url };
  });

  it('response with 200 OK', async () => {
    const res = await request(app).get('/api/v1/author');
    expect(res.statusCode).toBe(200);
  });

  it('response with json', async () => {
    const res = await request(app)
      .get('/api/v1/author')
      .set('Accept', 'application/json');
    expect(res.headers['content-type']).toMatch(/json/);
  });

  it('response with author object', async () => {
    const res = await request(app)
      .get('/api/v1/author')
      .set('Accept', 'application/json');
    expect(res.body.name).toBeDefined();
    expect(res.body.url).toBeDefined();
    expect(res.body).toMatchObject(author);
  });
});

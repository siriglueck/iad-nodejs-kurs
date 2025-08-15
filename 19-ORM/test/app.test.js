import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '../src/app';

describe('The Todos Server App', () => {
  it('should be an Express.js App', () => {
    expect(app.use).toBeDefined(); // Simple check. Just test the middleware mount point
  });

  it('should sent CORS headers on GET', async () => {
    const res = await request(app).get('/api/v1/todos');
    expect(res.headers['access-control-allow-origin']).toBe('*');
  });

  it('should handle OPTIONS preflight successfully with no content', async () => {
    const res = await request(app).options('/api/v1/todos');
    expect(res.statusCode).toBe(204);
  });

  it('should handle OPTIONS preflight successfully with allowed methods', async () => {
    const res = await request(app).options('/api/v1/todos');
    const allowedMethods =
      res.header['access-control-allow-methods'].split(',');
    expect(allowedMethods).toContain('GET');
    expect(allowedMethods).toContain('POST');
    expect(allowedMethods).toContain('PATCH');
    expect(allowedMethods).toContain('DELETE');
  });
});

import fs from 'node:fs/promises';
import path from 'node:path';
import cors from 'cors';
import express from 'express';
import { PrismaClient } from './src/generated/prisma/client.js';

const app = express();

app.use(cors());
app.use(express.json());

// author
app.get('/api/v1/author', async (_req, res, next) => {
  try {
    const file = path.join(import.meta.dirname, '..', 'data', 'author.txt');
    const raw = await fs.readFile(file, 'utf8');
    const [name, url] = raw.toString().trim().split(',');
    res.json({ name, url });
  } catch (err) {
    next(err);
  }
});

const db = new PrismaClient();

// GET
app.get('/api/v1/todos', async (_req, res) => {
  const todos = await db.todo.findMany();
  return res.json(todos);
});

// POST
app.post('/api/v1/todos', async (req, res) => {
  const { title, completed = false } = req.body ?? {};
  const todo = await db.todo.create({ data: { title, completed } });
  return res.status(201).json(todo);
});

// PATCH
app.patch('/api/v1/todos/:id', async (req, res) => {
  const id = Number(req.params.id);
  const changes = req.body ?? {};
  const todo = await db.todo.update({ where: { id }, data: changes });
  res.json(todo);
});

// DELETE
app.delete('/api/v1/todos/:id', async (req, res) => {
  const id = Number(req.params.id);
  await db.todo.delete({ where: { id } });
  res.sendStatus(204);
});

export default app;

import express from 'express';
import cors from 'cors';

import { createTodo, getAll } from '../lib/todos.js';

const todosRouter = express.Router();

// Middlewares für Body Parsing
todosRouter.use(cors()); // Clients sind durchaus "remote"
todosRouter.use(express.json()); // Im Request Body ist JSON drin

todosRouter.get('/', (req, res) => {
  const todos = getAll();
  res.json(todos);
});

todosRouter.post('/', (req, res) => {
  const { title } = req.body;
  const todo = createTodo(title);
  res.json(todo);
});

export default todosRouter;

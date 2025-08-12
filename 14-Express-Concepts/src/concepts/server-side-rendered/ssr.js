import express from 'express';

import { createTodo, getAll } from '../../lib/todos.js';

const ssrRouter = express.Router();

// "Globale" View Daten
ssrRouter.use((req, res, next) => {
  res.locals.route = 'ssr';
  res.locals.title = 'Server Side Rendered';
  next();
});

// Middlewares für Body Parsing
ssrRouter.use(express.urlencoded()); // Im Request Body sind Form-Daten drin

ssrRouter.get('/', (req, res) => {
  const todos = getAll();
  res.render('ssr', { todos }); // render ein View
});

ssrRouter.post('/', (req, res) => {
  const { title } = req.body; // get the body
  createTodo(title);
  const todos = getAll();
  res.render('ssr', { todos });
});

export default ssrRouter;

import express from 'express';

import { getAll } from '../../lib/todos.js';

const mixedRouter = express.Router();

// "Globale" View Daten
mixedRouter.use((req, res, next) => {
  res.locals.route = 'mixed';
  res.locals.title = 'Mixed';
  next();
});

mixedRouter.get('/', (req, res) => {
  const todos = getAll();
  res.render('mixed', { todos });
});

export default mixedRouter;

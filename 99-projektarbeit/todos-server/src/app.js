// hier muss Express anwenden
import express from 'express';
import authorRouter from './api/author.js';
import todosRouter from './api/todos.js';

const app = express();

app.use(express.json());

/*
const app = (_req, res) => {
  res.statusCode = 404;
  res.end('Not Found');
};
*/

// API routes
app.use('/api/v1', todosRouter);
app.use('/api/v1', authorRouter);

// Static files
// app.use(express.static('public'));

export default app;

import cors from 'cors';
import express from 'express';
import db from '../lib/db.js';

const todosRouter = express.Router();

// JSON Parsing
todosRouter.use(express.json());
// CORS einschalten
todosRouter.use(cors());

/* Database Section*/

// GET
todosRouter.get('/todos', (_req, res) => {
  const todos = db.prepare('SELECT * FROM todos').all();

  const boolTodos = todos.map((t) => {
    return {
      id: t.id,
      title: t.title,
      completed: t.completed ? true : false,
    };
  });

  res.json(boolTodos);

  /*
  res.json(todos.map((t) => ({ ...t, completed: !!t.completed }))); */
});

// POST - CREATE
todosRouter.post('/todos', (req, res) => {
  // insert a task to DB
  // we have to convert "true to 1" and "falsce to 0"
  const todo = db
    .prepare('INSERT INTO todos (title, completed) VALUES (?,?)')
    .run(req.body.title, req.body.completed ? 1 : 0);
  // select the posted task from DB
  const createdId = db
    .prepare('SELECT * FROM todos WHERE id = ?')
    .get(todo.lastInsertRowid);

  createdId.completed = !!createdId.completed;
  // 201 = created
  res.status(201).json(createdId);
});

// DELETE
todosRouter.delete('/todos/:id', (req, res) => {
  // get ID from the path
  const { id } = req.params;

  // delete a task using rowid
  db.prepare('DELETE FROM todos WHERE id = ?').run(id);

  // 204 = No Content
  res.status(204).send();
});

// UPDATE
todosRouter.patch('/todos/:id', (req, res) => {
  // get ID from the path
  const { id } = req.params;

  // 1. read
  const editedEntry = db.prepare('SELECT * FROM todos WHERE id = ?').get(id);

  // 2. update proproty
  if (typeof req.body.title !== 'undefined') {
    editedEntry.title = req.body.title;
  }
  if (typeof req.body.completed !== 'undefined') {
    editedEntry.completed = req.body.completed ? 1 : 0;
  }

  // 3. update in the databank
  db.prepare('UPDATE todos SET title = ?, completed = ? WHERE id = ?').run(
    editedEntry.title,
    editedEntry.completed,
    id,
  );

  editedEntry.completed = !!editedEntry.completed;
  res.status(200).json(editedEntry);
});

export default todosRouter;

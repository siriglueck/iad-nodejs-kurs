import express from 'express';
import db from '../lib/db.js';
import cors from 'cors';
import { getUserById, getUsers } from '../lib/users.js';

const userRouter = express.Router();

// API middlewares
userRouter.use(express.json());
/*
userRouter.use((req, res, next) => {
  res.appendHeader('Access-Control-Allow-Origin', '*');
  next();
});
*/
//Cross Origin Resource sharing einschalten
userRouter.use(cors());

// get all users
userRouter.get('/', (_req, res) => {
  const users = getUsers();
  res.json(users);
});

// get one user by id
userRouter.get('/:id', (req, res) => {
  const id = req.params.id;
  const user = getUserById(id);
  if (user) {
    res.json(user);
  } else {
    res.sendStatus(404);
  }
});

//create a new user
//post data in body
userRouter.post('/', (req, res) => {
  const info = db
    .prepare(
      'INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)',
    )
    .run(req.body.first_name, req.body.last_name, req.body.email);

  const createdUser = db
    .prepare('SELECT * FROM users WHERE id = ?')
    .get(info.lastInsertRowid);

  res.status(201).json(createdUser);
});

// update a user
userRouter.put('/:id', (req, res) => {
  const id = req.params.id;
  const info = db
    .prepare(
      'UPDATE users SET first_name = ?, last_name = ?, email = ? WHERE id = ?',
    )
    .run(req.body.first_name, req.body.last_name, req.body.email, id);
  if (info.changes === 0) {
    res.sendStatus(404);
    return;
  }

  const user = db.prepare('SELECT * FROM users WHERE id = ?').get(id);

  res.json(user);
});

// delete a user
userRouter.delete('/:id', (req, res) => {
  const id = req.params.id;
  const info = db.prepare('DELETE FROM users WHERE id = ?').run(id);
  if (info.changes) {
    res.sendStatus(204);
  } else {
    res.sendStatus(404);
  }
});

export default userRouter;

import db from './db.js';

export function getUsers() {
  return db.prepare('SELECT * FROM users').all();
}

export function getUserById(id) {
  return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

import db from './db.js';
export function getEntriesByUser(id) {
    return db.prepare('SELECT * FROM entries WHERE user_id = ?').all(id);
}

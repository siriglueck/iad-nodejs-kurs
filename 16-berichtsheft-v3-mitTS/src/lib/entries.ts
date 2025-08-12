import db from './db.js';

export function getEntriesByUser(id: number) {
	return db.prepare('SELECT * FROM entries WHERE user_id = ?').all(id);
}

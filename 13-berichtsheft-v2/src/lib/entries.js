import db from './db.js';

export function getEntriesByUser(id) {
	return db.prepare('SELECT * FROM entriees WHERE user_id = ?').all(id);
}

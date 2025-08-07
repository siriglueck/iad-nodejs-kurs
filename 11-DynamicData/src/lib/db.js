import database from 'better-sqlite3';

const db = new database('data/dev.db');
// Enable WAL mode for better concurrency/performance
db.pragma('journal_mode = WAL');

db.exec(`
	CREATE TABLE IF NOT EXISTS users (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		first_name TEXT NOT NULL,
		last_name TEXT,
		email TEXT NOT NULL UNIQUE
		)
`);

export default db;

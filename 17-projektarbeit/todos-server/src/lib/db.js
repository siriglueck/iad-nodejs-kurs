import database from 'better-sqlite3';

const db = new database('data/dev.db');
// Enable WAL mode for better concurrency/performance
db.pragma('journal_mode = WAL');
db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER NOT NULL
      )
`);
export default db;

import db from '../src/lib/db.js';

const info = db.prepare('INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)').run('Siri', 'Glueck', 'siri@glueck.de', 'geheim');

db.prepare(
  "INSERT INTO entries (user_id, topic, day, nr) VALUES (?,?,datetime('now'),?)").run(info.lastInsertRowid, 'Node Paketmanager', 1);

db.prepare(
  "INSERT INTO entries (user_id, topic, day, nr) VALUES (?,?,datetime('now'),?)").run(info.lastInsertRowid, 'Sementische Versionierung', 2);

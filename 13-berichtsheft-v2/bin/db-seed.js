import db from '../src/lib/db.js';
import { createUser } from '../src/lib/users.js';

const user = createUser({
	first_name: 'Micha',
	last_name: 'Buchholz',
	email: 'micha@buchholz.de',
	password: 'geheim',
});

db.prepare(
	"INSERT INTO entries (user_id, topic, day, nr) VALUES (?,?,datetime('now'),?)",
).run(user.id, 'Node Paketmanager', 1);

db.prepare(
	"INSERT INTO entries (user_id, topic, day, nr) VALUES (?,?,datetime('now'),?)",
).run(user.id, 'Semantische Versionierung', 2);

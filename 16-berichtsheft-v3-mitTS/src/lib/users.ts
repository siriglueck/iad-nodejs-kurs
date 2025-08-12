import crypto from 'node:crypto';
import db from './db.js';
import type { User } from '../model/user.js';

function hashPw(pw: string) {
	const salt = crypto.randomBytes(16).toString('hex');
	const hashedPw = crypto.scryptSync(pw, salt, 64);
	return `${salt}:${hashedPw.toString('hex')}`;
}

// function validatePw(hash, candidate) {
// 	const [salt, hashedPw] = hash.split(':');
// 	const hashedCandidate = crypto.scryptSync(candidate, salt, 64);
// 	return hashedCandidate.toString('hex') === hashedPw;
// }

export function getUserById(id: number) {
	return db.prepare('SELECT * FROM users WHERE id = ?').get(id);
}

export function getUserByEmail(email: string) {
	return db.prepare('SELECT * FROM users WHERE email = ?').get(email);
}

export function createUser(user: User) {
	// insert und laden
	const info = db
		.prepare(
			'INSERT INTO users (first_name, last_name, email, password) VALUES (?,?,?,?)',
		)
		.run(user.first_name, user.last_name, user.email, hashPw(user.password));

	/*
	if (info.changes) {
		return getUserById(Number(info.lastInsertRowid));

	} else {
		return null;
	}*/

	if (info.lastInsertRowid > Number.MAX_VALUE)
		throw new Error('Unexpected big number');
	else return getUserById(Number(info.lastInsertRowid));
}

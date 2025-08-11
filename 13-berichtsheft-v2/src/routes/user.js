import express from 'express';
import { createUser, getUserByEmail } from '../lib/users.js';

const userRouter = express.Router();

// Browser submitten Formular-Daten URL encoded und nicht als JSON-Daten
// Deshalb der urlencoded-Bodyparser
// Ergebnis ist das gleiche: auf req.body stehen die Daten als Objekt zur Verfügung
userRouter.use(express.urlencoded());

/* GET login page. */
userRouter.get('/login', (_req, res) => {
	res.status(404).send('Not implemented');
	//res.render('index', { title: 'Berichtsheft' });
});

/* GET register page. */
userRouter.get('/register', (_req, res) => {
	//res.status(404).send('Not implemented');
	res.render('register');
});

/* POST register */
userRouter.post('/register', (req, res) => {
	const user = req.body;

	// Validate unique email
	const existingUser = getUserByEmail(user.email);

	if (existingUser) {
		res.render('register', {
			error: { email: 'User mit dieser Email existiert schon.' },
		});
	} else {
		createUser(user);
		res.redirect('/'); // später login seite
		// comparable to
		// res.appendHeader('Location','/').sendStatus(301);
	}
});

export default userRouter;

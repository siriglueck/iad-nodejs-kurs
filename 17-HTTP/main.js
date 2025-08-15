import express from "express";
import cookieParser from 'cookie-parser';

const app = express();

app.use(cookieParser());


//params is a feature from express
// curl -v  http://localhost:3000/in-path/Siri555
app.get('/in-path/:username', (req, res) => {
	const name = req.params.username
	res.send(`Hallo ${name}`);
});

// curl -v  http://localhost:3000/in-query?username=Siri
app.get('/in-query', (req, res) => {
	const name = req.query.vorname;
	res.send(`Hallo ${name}`);
});

//Body always needs Parse
//This means it does not matter, send whatever to me
// curl -v -d "Micha" -X GET  http://localhost:3000/in-body   
app.use(express.raw({ type: '*/*'}));
app.post('/in-body', (req, res) => {
	const name = req.body;
	res.send(`Hallo ${name}`);
});

// curl -v -H "X-Vorname: Toni"  http://localhost:3000/in-header
app.get('/in-header', (req, res) => {
	//const name = req.accepts();
	const name = req.headers['x-vorname'];
	res.send(`Hallo ${name}`);
});

// Technische aspekt : Cookie feature
// Cookies erzeugen mit Express
app.get('/prepare-cookie/:username', (req,res) =>{
	// Erzeugt einen Header 'set-cookie'
	res.cookie('myfirstcookie', req.params.username, {
		path: '/',
		maxAge: 1000 * 60 * 10,
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		// signed: true
	});
	res.send(`Danke für deinen Besuch`);
});


app.get('/in-cookie', (req,res) =>{
	console.log(req.cookies); // with cookie-parser is that an object
	const name = req.cookies.myfirstcookie;
	res.json(`Hallo ${name}`);
});

const users = [];
let lastId = 0;

app.get('/login/:username', (req,res) =>{
	// create a user
	const user = { id: ++lastId, name: req.params.username };
	users.push(user);

	// Erzeugt einen Header 'set-cookie'
	res.cookie('__auth', user.id, {
		path: '/',
		maxAge: 1000 * 60 * 30,
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		// signed: true
	});
	res.send(`Wilkommen ${user.name}`);
});

app.get('/admin', (req, res) => {
	//Guck nach, ob Keks existiert
	const userId = req.cookies.__auth;
	if (!userId) {
		res.send('Not authorized');
	} else {
		const user = users.find(u => u.id === Number(userId));
		res.send(`Hallo zurück, lieber ${user.name}`)
	}
});

app.listen(3000);

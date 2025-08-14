import express from "express";

const app = express();

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


app.listen(3000);

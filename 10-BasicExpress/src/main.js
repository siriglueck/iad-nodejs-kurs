import express from "express";

// Aufgabe einer Express App
// 1.) Serve dynamic pages
// 2.) Serve static assets/files ex. images, favicons, css files
// 3.) Serve JSON data (REST-API)

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies

// zu 1.)
app.get("/info", (req, res) => {
  res.send(`<h1>Hallo, bei mir ist es ${new Date().toLocaleTimeString()}</h1>`);
});

// zu 3.)
const todos = [];
app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const todo = { id: todos.length + 1, text: req.body.text };
  todos.push(todo);
  res.status(201).json(todo);
});

// zu 2.)
// ready to use static files in the public folder (provided by express)
app.use(express.static("public"));

app.listen(3000);

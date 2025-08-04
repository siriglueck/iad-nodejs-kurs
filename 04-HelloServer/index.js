const http = require("node:http");

const todos = [{ id: 1, text: "Module Systeme" }];

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.statusCode = 200;
      res.appendHeader("Content-Type", "text/html");
      res.write("<h1>Hallo from the Server</h1>");
      res.end();
      break;
    case "/api/todos":
      if (req.method === "GET") {
        res.appendHeader("Content-Type", "application/json");
        res.write(JSON.stringify(todos));
        res.end();
      } else if (req.method === "POST") {
        req.on("data", (chunk) => {
          const text = String(chunk);
          const todo = { id: todos.length + 1, text };

          todos.push(todo);

          res.appendHeader("Content-Type", "application/json");
          res.write(JSON.stringify(todo));
          res.end();
        });
      }
      break;
    default:
      res.statusCode = 404;
      res.appendHeader("Content-Type", "text/plain");
      res.write("Seite nicht gefunden.");
      res.end();
  }
});

// 3000 ist der standardmäßige Port für HTTP-Server
server.listen(3000, () => {
  console.log("Server läuft auf http://localhost:3000/");
});

// Hinweis: Um den Server zu stoppen, drücke Strg+C im Terminal.

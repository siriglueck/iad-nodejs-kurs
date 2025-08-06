// deafult import
import express from "express";

// create an express server
// now we gonna call server as app (server)
const app = express();

// Middlewares!

// Dev Tools Blocker

app.use((req, res, next) => {
  if (req.url === "/.well-knwon/appspecifics/com.chrome.devtools.json") {
    res.status(404);
    res.end();
  } else {
    next();
  }
});

// Empty middleware
app.use((req, res, next) => {
  // Aufgaben einer Middleware
  // 1. Req untersuchen
  // 2. Res vorbereiten
  // 3a. Irgenetwas anderes machen
  // 3. Nächste Middleware aufrufen
  // If there is no next() in the middleware, the request will not continue so it means end.
  console.log("MW1 before");
  next();
  console.log("MW1 after");
  // 3b. noch etwas anderes machen
  // 4. Req nochmal angucken
  // 5. Res verändern
});

// Timing Middleware
app.use((req, res, next) => {
  const start = performance.now();
  console.log("MB3 before");
  next();
  console.log("MW3 after");
  const ende = performance.now();
  console.log(`Request took ${ende - start}ms`);
});

// Logger Middleware
app.use((req, res, next) => {
  //console.log(req.query.max);
  console.log(`${req.method} ${req.url}`);
  console.log("MW2 before");
  next();
  console.log("MW2 after");
});

app.use((req, res, next) => {
  if (req.path === "/pause" && req.method === "GET") {
    res.end("<h1>Pause!</h1>");
  } else {
    next();
  }
});

// No global middlewarem restricted to path that starts wtih /api and /api/...
app.use("/api", (req, res, next) => {
  console.log("-----> API Request");
  next();
});

// Route Middleware, restricted to method GET and path exactly /
// Route Middleware never has next() because it is the last middleware for this route
// Das wird als app-Route bezeichnet
app.get("/", (req, res) => {
  res.end("<h1>Homepage</h1>");
});

// Restricted to method POST, DELETE, PATCH, OPTIONS, HEAD, TRACE
app.post("/", (req, res) => {
  res.end("POST to /");
});

app.delete("/", (req, res) => {
  res.end("DELETE to /");
});

app.listen(3000, () => {
  console.log("App Server started. Visit http://localhost:3000");
});

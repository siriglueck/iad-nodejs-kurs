import express from "express";
import { aboutHandler } from "./about.js";
import todosRouter from "./todos.js";
const app = express();
app.use((req, res, next) => {
    console.log(req.url);
    next();
});
app.get("/", (req, res) => {
    res.send("<h1><Home/h1>");
});
app.get("/about", aboutHandler);
app.use("/todos", todosRouter);
app.listen(3000);

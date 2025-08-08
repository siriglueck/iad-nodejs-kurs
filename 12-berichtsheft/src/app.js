import express from "express";
import { engine } from "express-handlebars";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import reportsRouter from './routes/reports.js';

const app = express();

// view engine setup
//steht ganz oben
app.engine("hbs", engine({ extname: ".hbs" }));
app.set("view engine", "hbs"); // Default Engine eingestellt, so we can ignore the files Endung

// Logger Middleware ist fast immer ganz weit oben
app.use(logger("dev"));

// Dynamic Route pages
app.use("/", indexRouter);
app.use("/berichte",reportsRouter);
//app.use("/users", usersRouter);

// Static files Middleware (im Dozentopinion hinter den dynamische Route)
app.use(express.static("public"));

//module.exports = app;
export default app;

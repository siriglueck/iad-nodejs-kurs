import express, {} from 'express';
import { engine } from 'express-handlebars';
import logger from 'morgan';
import indexRouter from './routes/index.js';
import reportsRouter from './routes/reports.js';
import userRouter from './routes/user.js';
const app = express();
// Security: avoid express fingerprint
app.disable('x-powered-by');
// view engine setup
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs'); // Default Engine eingestellt
// Logger middleware ist fast immer ganz weit oben
app.use(logger('dev'));
// Dynamic routes (pages)
app.use('/', indexRouter);
app.use('/', userRouter); //ohne prefix
app.use('/berichte', reportsRouter);
// Static files middleware (imho hinter den dynamische Routen)
app.use(express.static('public'));
// Security: 404-Middleware
app.use((_req, res) => {
    res.status(404).render('404');
});
// Serity: custom errhandler
// Type Errors, weil @type/express hier nicht gut arbeitet
app.use((err, _req, res, _next) => {
    console.error(err.stack);
    res.status(500).render('error', {
        error: process.env.NODE_ENV === 'production' ? '' : err.stack,
        message: 'Hoppla, da lief etwas schief.!',
    });
});
export default app;

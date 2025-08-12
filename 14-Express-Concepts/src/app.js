import express from 'express';
import morgan from 'morgan';
import { create } from 'express-handlebars';
import todosRouter from './api/todos.js';
import ssrRouter from './concepts/server-side-rendered/ssr.js';
import mixedRouter from './concepts/mixed/mixed.js';

const app = express();

// Logging
app.use(morgan('dev'));

// View Engine konfigurieren
// Dies ist nur(!) notwendig falls views gerendert werden
// Hier natürlich in den Konzepten ssr und mixed
const hbs = create({
  helpers: {
    isCurrentPage(route, requestedRoute) {
      return route === requestedRoute ? 'aria-current="page"' : '';
    },
  },
  extname: '.hbs',
});
app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

// API Routes
app.use('/api/todos', todosRouter);

// Concepts
app.use('/csr', express.static('src/concepts/client-side-rendered'));
app.use('/ssr', ssrRouter);
app.use('/mixed', mixedRouter);

// Static files
app.use(express.static('public'));

export default app;

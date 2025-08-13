// hier muss es nicht geändert werden

import http from 'node:http';
import app from './src/app.js';

const server = http.createServer(app);

server.listen(3000, () => {
  console.log(
    'Todos Server started and is listening at http://localhost:3000/',
  );
});

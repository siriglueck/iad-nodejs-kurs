import http from 'node:http';
import app from './src/app.js';

const server = http.createServer(app);

server.listen(3000, () => {
  console.log('Server listening at http://localhost:3000');
});

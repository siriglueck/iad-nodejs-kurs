import express from 'express';
import userRouter from './api/users.js';
import { getUsers } from './lib/users.js';

const app = express();

// Page routes
app.get('/', (req, res) => {
  let html = '<ul id="userList">';
  const users = getUsers();

  for (const user of users) {
    html += `<li>${user.id}.) ${user.first_name} ${user.last_name} (${user.email}) </li>`;
  }

  html += '</ul>';
  res.send(html);
});

// API routes
app.use('/api/users', userRouter);

// Static files
app.use(express.static('public'));

export default app;

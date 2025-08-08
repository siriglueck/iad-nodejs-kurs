import { getUserById } from '../lib/users.js';

export default function auth(req, res,next) {
  // TODO: read userId from session (egal woher), ...
  const userId = 1;

  const user = getUserById(userId);
  res.locals.user = user;

  next();
}

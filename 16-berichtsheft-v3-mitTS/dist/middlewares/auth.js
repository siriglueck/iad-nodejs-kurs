import { getUserById } from '../lib/users.js';
const auth = (_req, res, next) => {
    // TODO: read userId from session, ...
    const userId = 1;
    const user = getUserById(userId);
    res.locals.user = user;
    next();
};
export default auth;

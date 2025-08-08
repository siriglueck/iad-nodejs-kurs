import express from "express";
import auth from '../middlewares/auth.js';
import { getEntriesByUser } from '../lib/entries.js';

const reportsRouter = express.Router();

reportsRouter.get("/", auth , (_req, res) => {
  const { user } = res.locals;
  const entries = getEntriesByUser(user.id);
  res.render("reports/view", { entries});
});

export default reportsRouter;

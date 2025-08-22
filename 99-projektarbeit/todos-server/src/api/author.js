import fs from 'node:fs';
import express from 'express';

const authorRouter = express.Router();

// JSON Parsing
authorRouter.use(express.json());

// get .txt file
authorRouter.get('/author', (_req, res) => {
  const data = fs.readFileSync('./data/author.txt');

  const [name, url] = data.toString().trim().split(',');
  const author = { name, url };
  res.json(author);
});

export default authorRouter;

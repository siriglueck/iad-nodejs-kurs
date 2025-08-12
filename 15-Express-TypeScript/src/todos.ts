import express from "express";

const todosRouter = express.Router();

todosRouter.get("/", (req, res) => {
  res.json([]);
});

export default todosRouter;

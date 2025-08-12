import type { Request, Response } from "express";

/*
export function aboutHandler() {
  return (req: Request, res: Response) => {
    res.send("<h1>About</h1>");
  };
}
*/

export function aboutHandler(req: Request, res: Response) {
  res.send("<h1>About:TSX</h1>");
}

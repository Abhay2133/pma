import { NextFunction, Request, Response } from "express";
import { decodeToken } from "../services/auth.js";

async function checkAuth(req: Request, res: Response, next: NextFunction) {
  const token: string = req.headers["authorization"]!;
  req.user = null;

  if (!token) {
    return next();
  }

  //split token
  const tokenValue: string = token.split(" ")[1];

  const user = decodeToken(tokenValue);
  req.user = user;

  return next();
}

export default checkAuth;

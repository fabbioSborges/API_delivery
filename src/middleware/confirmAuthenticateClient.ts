import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function confirmAuthenticateCLient(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: "Token não informado" });
  }

  const [bearer, token] = authHeader.split(" ");

  try {
    const tokenMatch = verify(token, "chavesecreta");
    console.log("Id Client", tokenMatch.sub);
    req.id_client = tokenMatch.sub as string;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Token invalido" });
  }
}

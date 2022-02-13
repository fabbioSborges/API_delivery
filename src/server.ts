import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Olá Turma" });
});

app.use(routes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: "Erro interno" });
});

app.listen(process.env.PORT || "3331", () => console.log("Servidor"));

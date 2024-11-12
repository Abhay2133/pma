import express, { Request, Response } from "express";
import authRoutes from "./routes/auth.js";
import apiRoutes from "./routes/api/index.js";

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);
app.use("/auth", authRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

export default app;

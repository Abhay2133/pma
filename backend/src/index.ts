import express, { Request, Response } from "express";
import userRouter from "./routes/user";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT: string | number = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/users", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, Express with TypeScript!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

import { UserPayload } from "../services/auth.ts";

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload | null; // Adjust the type of `user` according to your JWT payload
    }
  }
}

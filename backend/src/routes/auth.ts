import { Router } from "express";
import { createUserHandler, loginUserHandler } from "../controllers/auth.js";

const router: Router = Router();

router.post("/signup", createUserHandler);
router.post("/login", loginUserHandler);

export default router;

import { Router } from "express";
import { createBoardHandler, getBoardHandler } from "../controllers/boards";

const router: Router = Router();

router.get("/", getBoardHandler);
router.post("/create", createBoardHandler);

export default router;

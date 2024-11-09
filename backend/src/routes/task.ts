import { Router } from "express";
import { createTaskHandler, getTasksHandler } from "../controllers/task";

const router: Router = Router();

router.get("/", getTasksHandler);
router.post("/create", createTaskHandler);

export default router;

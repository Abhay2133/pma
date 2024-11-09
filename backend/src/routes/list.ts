import { Router } from "express";
import { createListHandler, getListHandler } from "../controllers/list";

const router: Router = Router();

router.get("/", getListHandler);
router.post("/create", createListHandler);

export default router;

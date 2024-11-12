import { Router } from "express";
import {
  createProjectHandler,
  listProjectsHandler,
  updateProjectHandler,
} from "../../controllers/project.js";

const router = Router();

router.post("/create", createProjectHandler);
router.get("/", listProjectsHandler);
router.post("/update", updateProjectHandler);

export default router;

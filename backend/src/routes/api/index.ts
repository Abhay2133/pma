import express from "express";
import projectRouter from "./project.js";
import checkAuth from "../../middlewares/auth.js";

const router = express.Router(); // Use express.Router() instead of express()

//Middleware
router.use(checkAuth);

router.use("/projects", projectRouter);

export default router;

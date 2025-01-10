import { Router } from "express";
import latestData from "../controllers/stats.controller.js";

const router = Router();

router.get("/stats", latestData);

export default router;

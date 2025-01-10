import { Router } from "express";
import latestData from "../controllers/stats.controller.js";

const router = Router();

router.route("/stats").get(latestData);

export default router;

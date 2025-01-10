import { Router } from "express";
import calculateDeviation from "../controllers/deviation.controller.js";

const router = Router();

router.route("/deviation").get(calculateDeviation);

export default router;

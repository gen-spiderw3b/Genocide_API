import { Router } from "express";
import { getCurrentUser } from "../../Controllers/Dashboard/dashboard.js";

const router = Router();

router.route("/").get(getCurrentUser);

export default router;

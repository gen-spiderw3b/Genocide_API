import { Router } from "express";
import { createGroup } from "../../Controllers/War/war.js";
const router = Router();

router.route("/create-group").post(createGroup);

export default router;

import { Router } from "express";
import { setDateTest } from "../Controllers/test.js";
const router = Router();

router.route("/").post(setDateTest);

export default router;

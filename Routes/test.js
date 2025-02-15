import { Router } from "express";
import { mountPath } from "../Controllers/test.js";
const router = Router();

router.route("/").get(mountPath);

export default router;

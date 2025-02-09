import { Router } from "express";
import { mountPath } from "../Controllers/test.js";
const router = Router();

router.route("/mountpath").post(mountPath);

export default router;

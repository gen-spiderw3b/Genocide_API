import { Router } from "express";
import { playVideo } from "../../Controllers/Education/playVideo.js";
const router = Router();
router.route("/").post(playVideo);
export default router;

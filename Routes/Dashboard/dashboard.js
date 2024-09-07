import { Router } from "express";
import {
  createHeadline,
  viewHeadline,
} from "../../Controllers/Dashboard/dashboard.js";
const router = Router();

router.route("/create-headline").post(createHeadline);
router.route("/view-headline").get(viewHeadline);

export default router;

import { Router } from "express";
import { createGroup, browseGroup } from "../../Controllers/War/war.js";
const router = Router();

router.route("/create-group").post(createGroup);
router.route("/browse-group").get(browseGroup);

export default router;

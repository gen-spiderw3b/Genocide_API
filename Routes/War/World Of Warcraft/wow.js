import { Router } from "express";
import {
  validateWarGroup,
  validateWarGroupId,
} from "../../../Middleware/Validators/validation.js";
import { getAllWowGroups } from "../../../Controllers/War/World Of Warcraft/wow.js";

const router = Router();

router.route("/browse-wow-groups").get(getAllWowGroups);

export default router;

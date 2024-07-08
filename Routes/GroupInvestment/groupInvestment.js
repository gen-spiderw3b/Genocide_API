import { Router } from "express";
import {
  getUserGroups,
  getAllUserGroups,
} from "../../Controllers/GroupInvestment/groupInvestment.js";
const router = Router();

router.route("/get-user-groups").get(getUserGroups);
router.route("/get-all-user-groups").get(getAllUserGroups);

export default router;

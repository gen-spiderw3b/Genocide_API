import { Router } from "express";
import {
  getAllUserGroups,
  setGroupCookie,
} from "../../Controllers/GroupInvestment/groupInvestment.js";

const router = Router();
router.route("/get-all-user-groups").get(getAllUserGroups);
router.route("/user-group/:id").post(setGroupCookie);

export default router;

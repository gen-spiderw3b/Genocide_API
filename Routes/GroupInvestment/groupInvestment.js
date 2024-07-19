import { Router } from "express";
import {
  getAllUserGroups,
  setGroupCookie,
} from "../../Controllers/GroupInvestment/groupInvestment.js";
import { userGroupCookie } from "../../Middleware/Validators/validation.js";
const router = Router();
router.route("/get-all-user-groups").get(getAllUserGroups);
router.route("/user-group/:id").post(userGroupCookie, setGroupCookie);

export default router;

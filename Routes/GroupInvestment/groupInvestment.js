import { Router } from "express";
import { getAllUserGroups } from "../../Controllers/GroupInvestment/groupInvestment.js";

const router = Router();
router.route("/get-all-user-groups").get(getAllUserGroups);
export default router;

import { Router } from "express";
import { getUserGroups } from "../../Controllers/GroupInvestment/groupInvestment.js";
import { authorizeAdmin } from "../../Middleware/AuthMiddleWare/authMiddleWare.js";
const router = Router();

router.route("/get-user-groups").get(getUserGroups);

export default router;

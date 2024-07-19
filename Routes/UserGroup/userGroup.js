import { Router } from "express";
import { getCurrentMember } from "../../Controllers/UserGroup/userGroup.js";

const router = Router();

router.route("/get-member/:groupId").get(getCurrentMember);
export default router;

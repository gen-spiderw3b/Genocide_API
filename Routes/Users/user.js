import { Router } from "express";
import {
  currentUser,
  userProfile,
  updateProfile,
  leaveOrg,
} from "../../Controllers/Users/user.js";
const router = Router();

router.route("/current-user").get(currentUser);
router.route("/user-profile").get(userProfile);
router.route("/update-profile").patch(updateProfile);
router.route("/leave-org").delete(leaveOrg);

export default router;

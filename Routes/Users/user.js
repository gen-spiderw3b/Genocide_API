import { Router } from "express";
import {
  currentUser,
  userProfile,
  updateProfile,
} from "../../Controllers/Users/user.js";
const router = Router();

router.route("/current-user").get(currentUser);
router.route("/user-profile").get(userProfile);
router.route("/update-profile").patch(updateProfile);

export default router;

import { Router } from "express";
import {
  currentUser,
  userProfile,
  updateProfile,
  leaveOrg,
  updatePic,
} from "../../Controllers/Users/user.js";
import upload from "../../Middleware/Multer/multerMiddleWare.js";
const router = Router();

router.route("/current-user").get(currentUser);
router.route("/user-profile").get(userProfile);
router.route("/update-pic").patch(upload.single("avatar"), updatePic);
router.route("/update-profile").patch(updateProfile);
router.route("/leave-org").delete(leaveOrg);

export default router;

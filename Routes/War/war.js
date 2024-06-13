import { Router } from "express";
import {
  validateWarGroup,
  validateWarGroupId,
  joinWarGroupId,
} from "../../Middleware/Validators/validation.js";
import {
  createGroup,
  myWarGroup,
  deleteWarGroup,
  updateWarGroup,
  joinWarGroup,
  leaveWarGroup,
  joinedGroups,
} from "../../Controllers/War/war.js";
import { browseGroups } from "../../Controllers/War/browseGroups.js";
const router = Router();

router.route("/create-group").post(validateWarGroup, createGroup);
router.route("/browse-groups").get(browseGroups);
router.route("/joined-group").get(joinedGroups);
router.route("/my-group").get(myWarGroup);
router.route("/delete-group/:id").delete(validateWarGroupId, deleteWarGroup);
router.route("/update-group/:id").patch(validateWarGroupId, updateWarGroup);
router.route("/join-group/:id").patch(joinWarGroupId, joinWarGroup);
router.route("/leave-group/:id").patch(validateWarGroupId, leaveWarGroup);

export default router;

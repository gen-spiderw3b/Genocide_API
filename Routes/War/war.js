import { Router } from "express";
import {
  validateWarGroup,
  validateWarGroupId,
} from "../../Middleware/Validators/validation.js";
import {
  createGroup,
  browseGroup,
  myWarGroup,
  deleteWarGroup,
  updateWarGroup,
} from "../../Controllers/War/war.js";
const router = Router();

router.route("/create-group").post(validateWarGroup, createGroup);
router.route("/browse-group").get(browseGroup);
router.route("/my-group").get(myWarGroup);
router.route("/delete-group/:id").delete(validateWarGroupId, deleteWarGroup);
router.route("/update-group/:id").patch(validateWarGroupId, updateWarGroup);

export default router;

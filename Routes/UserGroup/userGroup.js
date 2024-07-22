import { Router } from "express";
import {
  getCurrentMember,
  createHeadline,
} from "../../Controllers/UserGroup/userGroup.js";
import { createHeadlineValidate } from "../../Middleware/Validators/userGroupValidation.js";

const router = Router();
router.route("/get-member/:groupId").get(getCurrentMember);
router.route("/create-headline").post(createHeadlineValidate, createHeadline);
export default router;

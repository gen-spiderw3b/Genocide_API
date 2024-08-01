import { Router } from "express";
import {
  getCurrentMember,
  createHeadline,
  createSchedule,
  getSchedule,
  getInvestmentMembers,
  createSubgroup,
} from "../../Controllers/UserGroup/userGroup.js";
import {
  createHeadlineValidate,
  createScheduleValidate,
  createSubgroups,
} from "../../Middleware/Validators/userGroupValidation.js";

const router = Router();
router.route("/get-member/:groupId").get(getCurrentMember);
router.route("/create-headline").post(createHeadlineValidate, createHeadline);
router
  .route("/create-schedule/:groupId")
  .post(createScheduleValidate, createSchedule);
router.route("/get-schedule/:groupId").get(getSchedule);
router.route("/create-subgroup/:groupId").get(getInvestmentMembers);
router.route("/create-subgroup").post(createSubgroups, createSubgroup);
export default router;

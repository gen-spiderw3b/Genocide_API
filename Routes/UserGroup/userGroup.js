import { Router } from "express";
import {
  getCurrentMember,
  getAllMembers,
  createHeadline,
  createSchedule,
  getSchedule,
  createSubgroup,
  processMember,
  viewCreatedSubgroups,
  teamLeader,
} from "../../Controllers/UserGroup/userGroup.js";
import {
  createHeadlineValidate,
  createScheduleValidate,
  createSubgroups,
  checkMember,
  teamLeaderValidation,
} from "../../Middleware/Validators/userGroupValidation.js";

const router = Router();
router.route("/get-member/:groupId").get(getCurrentMember);
router.route("/get-all-members/:groupId").get(getAllMembers);
router.route("/create-headline").post(createHeadlineValidate, createHeadline);
router
  .route("/create-schedule/:groupId")
  .post(createScheduleValidate, createSchedule);
router.route("/get-schedule/:groupId").get(getSchedule);
router.route("/create-subgroup").post(createSubgroups, createSubgroup);
router.route("/view-created-subgroups").get(viewCreatedSubgroups);
router
  .route("/process-member/:memberId/:subgroupId")
  .patch(checkMember, processMember);
router.route("/update-teamleader").patch(teamLeaderValidation, teamLeader);
export default router;

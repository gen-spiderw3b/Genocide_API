import { Router } from "express";
import {
  getCurrentMember,
  getAllMembers,
  createHeadline,
  viewHeadline,
  deleteHeadlines,
  createSchedule,
  getSchedule,
  deleteDates,
  createSubgroup,
  deleteSubgroup,
  processMember,
  viewCreatedSubgroups,
  teamLeader,
  removeMember,
  getAllSubgroups,
  createTreasurer,
  createPresident,
  createVicePresident,
  createAssociate,
} from "../../Controllers/UserGroup/userGroup.js";
import {
  createHeadlineValidate,
  deleteHeadlineValidate,
  createScheduleValidate,
  createSubgroups,
  checkMember,
  teamLeaderValidation,
  promotionValidation,
} from "../../Middleware/Validators/userGroupValidation.js";
const router = Router();

/*
===============
Members
===============
*/
router.route("/get-member/:groupId").get(getCurrentMember);
router.route("/get-all-members/:groupId").get(getAllMembers);

/*
===============
Headline
===============
*/
router
  .route("/create-headline/:groupId")
  .post(createHeadlineValidate, createHeadline);
router.route("/view-headline/:groupId").get(viewHeadline);
router
  .route("/delete-headlines/:id")
  .delete(deleteHeadlineValidate, deleteHeadlines);

/*
===============
Schedule
===============
*/
router
  .route("/create-schedule/:groupId")
  .post(createScheduleValidate, createSchedule);
router.route("/get-schedule/:groupId").get(getSchedule);
router.route("/delete-date/:id").delete(deleteDates);
/*
===============
Subgroup
===============
*/
router.route("/create-subgroup").post(createSubgroups, createSubgroup);
router.route("/view-created-subgroups").get(viewCreatedSubgroups);
router
  .route("/process-member/:memberId/:subgroupId")
  .patch(checkMember, processMember);
router.route("/update-teamleader").patch(teamLeaderValidation, teamLeader);
router.route("/remove-member").patch(removeMember);
router.route("/all-subgroups").get(getAllSubgroups);
router.route("/delete-subgroup/:id").delete(deleteSubgroup);

/*
  ===============
  Promotion
  ===============
  */
router
  .route("/create-president/:groupId/:memberId")
  .patch(promotionValidation, createPresident);
router
  .route("/create-vicepresident/:groupId/:memberId")
  .patch(promotionValidation, createVicePresident);
router
  .route("/create-treasurer/:groupId/:memberId")
  .patch(promotionValidation, createTreasurer);
router
  .route("/create-associate/:groupId/:memberId")
  .patch(promotionValidation, createAssociate);

export default router;

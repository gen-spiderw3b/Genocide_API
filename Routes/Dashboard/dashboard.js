import { Router } from "express";
import {
  createHeadline,
  viewHeadline,
  createSchedule,
  getSchedule,
  deleteDates,
} from "../../Controllers/Dashboard/dashboard.js";
const router = Router();

/*
=========
HEADLINES
=========
*/
router.route("/create-headline").post(createHeadline);
router.route("/view-headline").get(viewHeadline);

/*
=========
SCHEDULE
=========
*/
router.route("/create-schedule").post(createSchedule);
router.route("/view-schedule").get(getSchedule);

export default router;

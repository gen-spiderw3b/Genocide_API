import { Router } from "express";
import {
  fileUpload,
  checkCourse,
  checkSection,
} from "../../Controllers/Education/upload.js";
import { createFullCourse } from "../../Controllers/Education/course.js";
const router = Router();

router.route("/check-course").post(checkCourse);
router.route("/check-section").post(checkSection);
router.route("/upload").post(fileUpload);
router.route("/create-course").post(createFullCourse);

export default router;

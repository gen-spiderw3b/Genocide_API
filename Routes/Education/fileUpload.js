import { Router } from "express";
import {
  fileUpload,
  checkCourse,
  checkSection,
} from "../../Controllers/Education/upload.js";
import {
  createFullCourse,
  getAllCourses,
  getCourse,
} from "../../Controllers/Education/course.js";
const router = Router();

router.route("/check-course").post(checkCourse);
router.route("/check-section").post(checkSection);
router.route("/upload").post(fileUpload);
router.route("/create-course").post(createFullCourse);
router.route("/courses").get(getAllCourses);
router.route("/course/:courseId").get(getCourse);

export default router;

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
import { findCourses, findCourse } from "../../Controllers/Education/update.js";
const router = Router();

//Create Course
router.route("/check-course").post(checkCourse);
router.route("/check-section").post(checkSection);
router.route("/upload").post(fileUpload);
router.route("/create-course").post(createFullCourse);

//Course Selection
router.route("/courses").get(getAllCourses);
router.route("/course/:courseId").get(getCourse);

//Update
router.route("/my-course").get(findCourses);
router.route("/my-course/:courseId").get(findCourse);

export default router;

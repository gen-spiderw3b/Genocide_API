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
import {
  findCourses,
  findCourse,
  addSection,
  removeSection,
  addFile,
  addFileSubmit,
  removeFile,
} from "../../Controllers/Education/update.js";
import upload from "../../Middleware/Multer/multerFileMiddleware.js";
const router = Router();

//Create Course
router.route("/check-course").post(checkCourse);
router.route("/check-section").post(checkSection);
router.route("/create-course").post(createFullCourse);

//Course Selection
router.route("/courses").get(getAllCourses);
router.route("/course/:courseId").get(getCourse);

//Update
router.route("/my-course").get(findCourses);
router.route("/my-course/:courseId").get(findCourse);

//Add Section
router.route("/my-course/add-section").post(addSection);

//Remove Section
router.route("/my-course/remove-section").post(removeSection);

//AddFile
router.route("/my-course/add-file").post(addFile);
router.route("/my-course/submit-file").post(addFileSubmit);

//RemoveFile
router.route("/my-course/remove-file").post(removeFile);

router.route("/upload").post(upload.single("file"), fileUpload);

export default router;

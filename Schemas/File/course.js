import mongoose from "mongoose";
import { COURSES } from "../../Utils/Constants/constants.js";
const Course = new mongoose.Schema(
  {
    course: {
      type: String,
      enum: Object.values(COURSES),
    },
    section: [
      {
        type: mongoose.Types.ObjectId,
        ref: "section",
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", Course);

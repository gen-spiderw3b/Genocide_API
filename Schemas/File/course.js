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
  },
  { timestamps: true }
);

export default mongoose.model("Course", Course);

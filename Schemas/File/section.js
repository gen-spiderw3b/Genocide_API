import mongoose from "mongoose";

const Section = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    section: {
      type: Number,
      required: true,
    },
    file: [
      {
        type: mongoose.Types.ObjectId,
        ref: "file",
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Section", Section);

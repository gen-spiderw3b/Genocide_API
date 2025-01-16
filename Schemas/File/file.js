import mongoose from "mongoose";

const File = new mongoose.Schema(
  {
    course: {
      type: String,
      required: true,
    },
    section: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("File", File);

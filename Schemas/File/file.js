import mongoose from "mongoose";

const File = new mongoose.Schema(
  {
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

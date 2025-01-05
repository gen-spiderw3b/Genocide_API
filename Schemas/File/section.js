import mongoose from "mongoose";

const Section = new mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

export default mongoose.model("Section", Section);

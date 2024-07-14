import mongoose from "mongoose";

const Member = new mongoose.Schema(
  {
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", Member);

import mongoose from "mongoose";

const Member = new mongoose.Schema(
  {
    uniqueName: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    state: String,
    city: String,
    permission: mongoose.Schema.Types.Mixed,

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", Member);

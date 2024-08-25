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
    messageReceived: [
      {
        type: mongoose.Types.ObjectId,
        ref: "contact",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Member", Member);

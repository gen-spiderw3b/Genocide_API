import mongoose from "mongoose";

const subGroupSchema = new mongoose.Schema(
  {
    subgroupName: String,

    teamLeader: {
      type: mongoose.Types.ObjectId,
      ref: "member",
    },

    joinedBy: [
      {
        type: mongoose.Types.ObjectId,
        ref: "member",
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "member",
    },
  },
  { timestamps: true }
);

export default mongoose.model("subGroup", subGroupSchema);

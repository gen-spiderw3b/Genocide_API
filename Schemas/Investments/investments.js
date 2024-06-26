import mongoose from "mongoose";
import {
  INVESTMENTS,
  MEMBER_COUNT,
  DUES,
} from "../../Utils/Constants/constants.js";
const Investment = new mongoose.Schema(
  {
    groupName: String,
    investment: {
      type: String,
      enum: Object.values(INVESTMENTS),
    },
    members: {
      type: Number,
      enum: Object.values(MEMBER_COUNT),
    },
    dues: {
      type: Number,
      enum: Object.values(DUES),
    },
    desc: String,
    joinedBy: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
    ],
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Investments", Investment);

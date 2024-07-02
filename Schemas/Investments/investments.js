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
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    associate: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
    ],
    president: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    vicePresident: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    treasurer: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    lieutenant: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Investments", Investment);

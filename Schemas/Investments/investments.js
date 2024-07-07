import mongoose from "mongoose";
import {
  INVESTMENTS,
  MEMBER_COUNT,
  DUES,
} from "../../Utils/Constants/constants.js";

const Investment = new mongoose.Schema(
  {
    groupName: String,
    desc: String,
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

    president: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },

    VicePresident: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    treasurer: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
    groupLeader: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Users",
      },
    ],
    associate: [
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

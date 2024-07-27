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

    joinedBy: [
      {
        type: mongoose.Types.ObjectId,
        ref: "member",
      },
    ],
    users: [
      {
        type: mongoose.Types.ObjectId,
        ref: "users",
      },
    ],

    dates: [
      {
        type: mongoose.Types.ObjectId,
        ref: "schedule",
      },
    ],

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Investments", Investment);

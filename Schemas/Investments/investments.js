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
      type: Map,
      of: String,
    },

    vicePresident: {
      type: Map,
      of: String,
    },
    treasurer: {
      type: Map,
      of: String,
    },
    captain: {
      type: Map,
      of: String,
    },
    teamLeader: {
      type: Map,
      of: String,
    },
    joinedBy: [
      {
        type: mongoose.Types.ObjectId,
        ref: "member",
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

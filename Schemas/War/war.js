import mongoose from "mongoose";
import { GAMES, GOALS } from "../../Utils/Constants/constants.js";
const CreateGroup = new mongoose.Schema(
  {
    groupName: String,
    players: Number,
    desc: String,
    games: {
      type: String,
      enum: Object.values(GAMES),
      default: GAMES.DEAD_BY_DAYLIGHT,
    },
    goals: {
      type: String,
      enum: Object.values(GOALS),
      default: GOALS.NONE,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("War", CreateGroup);

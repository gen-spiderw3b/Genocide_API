import mongoose from "mongoose";
import { POSITION } from "../../Utils/Classes/class.js";
const Member = new mongoose.Schema(
  {
    name: String,
    phoneNumber: String,
    role: {
      type: String,
      enum: Object.values(POSITION),
      default: POSITION.ASSOCIATE,
    },

    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", Member);

import mongoose from "mongoose";
import { POSITION } from "../../Utils/Classes/class.js";

const Member = new mongoose.Schema({
  role: {
    type: String,
    enum: Object.values(POSITION),
  },
  createdBy: {
    type: mongoose.Types.ObjectId,
    ref: "users",
  },
});

export default mongoose.model("Member", Member);

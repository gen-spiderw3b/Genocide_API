import mongoose from "mongoose";
import { INVESTMENTS } from "../../Utils/Constants/constants.js";
const investment = new mongoose.Schema(
  {
    groupName: String,
  },
  { timestamps: true }
);

export default mongoose.model("Investments", investment);

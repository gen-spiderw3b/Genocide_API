import mongoose from "mongoose";
import { CATEGORY } from "../../Utils/Classes/class.js";
const headlineSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: Object.values(CATEGORY),
    },
    headline: String,
    desc: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "Member",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Headline", headlineSchema);

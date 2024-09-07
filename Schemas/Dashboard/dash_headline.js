import mongoose from "mongoose";
import { DASHCATEGORY } from "../../Utils/Classes/class.js";
const headlineSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: Object.values(DASHCATEGORY),
    },
    headline: String,
    desc: String,
    link: String,
    madeBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("dashHeadline", headlineSchema);

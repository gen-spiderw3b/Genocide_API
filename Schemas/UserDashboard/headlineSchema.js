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
    link: String,
    madeBy: {
      type: mongoose.Types.ObjectId,
      ref: "Investments",
    },
  },
  { timestamps: true }
);

export default mongoose.model("SubHeadline", headlineSchema);

import mongoose from "mongoose";
import { POSITION, CREATE, DELETE } from "../../Utils/Classes/class.js";
const Member = new mongoose.Schema(
  {
    uniqueName: String,
    firstName: String,
    lastName: String,
    phoneNumber: String,
    state: String,
    city: String,

    role: {
      type: String,
      enum: Object.values(POSITION),
      default: POSITION.ASSOCIATE,
    },
    create: {
      type: String,
      enum: Object.values(CREATE),
      default: CREATE.NONE,
    },
    delete: {
      type: String,
      enum: Object.values(DELETE),
      default: DELETE.NONE,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Member", Member);

import mongoose from "mongoose";
import { ROLE } from "../Utils/Classes/class.js";
import { STATES } from "../Utils/Constants/constants.js";
const UserSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      enum: Object.values(ROLE),
      default: ROLE.MEMBER,
    },
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    avatar: String,
    avatarPublicId: String,
    state: {
      type: String,
      enum: Object.values(STATES),
    },
    city: String,
    phoneNumber: String,
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);

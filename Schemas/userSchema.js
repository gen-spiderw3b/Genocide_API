import mongoose from "mongoose";
import { ROLE } from "../Utils/Classes/class.js";
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
    state: String,
    city: String,
    phoneNumber: String,
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);

import mongoose from "mongoose";
import { Class } from "../Utils/Classes/class.js";
const UserSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      enum: Object.values(Class),
      default: Class.MEMBER,
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

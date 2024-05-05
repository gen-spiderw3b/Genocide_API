import mongoose from "mongoose";
import { Class } from "../Utils/Classes/class.js";
const UserSchema = new mongoose.Schema(
  {
    class: {
      type: String,
      default: Object.values(Class.MEMBER),
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    phoneNumber: {
      type: Number,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);

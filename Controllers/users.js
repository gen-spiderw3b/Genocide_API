import { StatusCodes } from "http-status-codes";
import userSchema from "../Schemas/userSchema.js";

// Register
export const registerUser = (req, res) => {
  res.status(200).json({ msg: "Register" });
};
//End Of Register

// Login
export const LoginUser = (req, res) => {
  res.status(200).json({ msg: "Login" });
};
//End Of Login

// Logout
export const logoutUser = (req, res) => {
  res.status(200).json({ msg: "Logout" });
};
//End Of Logout

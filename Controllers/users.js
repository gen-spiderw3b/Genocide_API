import { StatusCodes } from "http-status-codes";
import Users from "../Schemas/userSchema.js";

// Register
export const registerUser = async (req, res) => {
  const user = await Users.create(req.body);
  res.status(StatusCodes.CREATED).json(user);
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

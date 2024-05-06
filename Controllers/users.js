import { StatusCodes } from "http-status-codes";
import Users from "../Schemas/userSchema.js";
import { hashPassword, checkPassword } from ".././Utils/Bcrypt/hash.js";

// Register
export const registerUser = async (req, res) => {
  //Creating Admin
  const isFirstAccount = (await Users.countDocuments()) === 0;
  req.body.class = isFirstAccount ? "admin" : "member";
  //Hashing Password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  //Creating User
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

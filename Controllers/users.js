import { StatusCodes } from "http-status-codes";
import Users from "../Schemas/userSchema.js";
import { hashPassword, checkPassword } from ".././Utils/Bcrypt/hash.js";
import { UnauthorizedError } from ".././Middleware/RequestErrors/errors.js";
import { createToken } from ".././Utils/JsonWebToken/jsonWebToken.js";

// Register
export const registerUser = async (req, res) => {
  //Creating Admin
  const isFirstAccount = (await Users.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "member";

  //Hashing Password
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;

  //Creating User && Member
  const user = await Users.create(req.body);
  res
    .status(StatusCodes.CREATED)
    .json({ msg: "You have register with genocide" });
};
//End Of Register

// Login
export const LoginUser = async (req, res) => {
  const user = await Users.findOne({ email: req.body.email });

  const isUserVerify =
    user && (await checkPassword(req.body.password, user.password));

  if (!isUserVerify) {
    throw new UnauthorizedError("Invalid Login!");
  }
  //Create User Token
  const oneDay = 1000 * 60 * 60 * 24;
  const token = createToken({
    userId: user._id,
    role: user.role,
  });

  //Create User Cookie
  res.cookie("token", token, {
    httpOnly: true,
    expires: new Date(Date.now() + oneDay),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(200).json({ msg: `You have Logged in ${user.firstName} ` });
};
//End Of Login

// Logout
export const logoutUser = (req, res) => {
  res.clearCookie("token");
  res.clearCookie("groupToken");
  res.status(200).json({ msg: "User Logged Out" });
};
//End Of Logout

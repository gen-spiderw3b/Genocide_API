import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";
import Member from "../../Schemas/Investments/member.js";
import User from "../../Schemas/userSchema.js";
import { createToken } from "../../Utils/JsonWebToken/jsonWebToken.js";
import { UnauthorizedError } from "../../Middleware/RequestErrors/errors.js";

//Get All User Groups
export const getAllUserGroups = async (req, res) => {
  const group = await Investment.find({ authorize: req.user.userId });
  res.status(StatusCodes.OK).json({ group });
};

//Get Single Group Info
export const setGroupCookie = async (req, res) => {
  const member = await Member.findOne({ uniqueName: req.body.uniqueName });
  const user = await User.findOne({ email: req.body.email });

  if (!user) throw new UnauthorizedError("Invalid Email!");
  if (!member) throw new UnauthorizedError("Invalid Unique Name!");

  const oneHour = 1000 * 60 * 60;
  const groupToken = createToken({
    memberId: member._id,
    groupRole: member.permission.role,
    userId: user._id,
    role: user.role,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
  });

  res.cookie("token", groupToken, {
    httpOnly: true,
    expiresIn: new Date(Date.now() + oneHour),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "intializing group!" });
};

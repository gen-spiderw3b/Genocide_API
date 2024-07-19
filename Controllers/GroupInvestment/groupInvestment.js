import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";
import Member from "../../Schemas/Investments/member.js";
import mongoose from "mongoose";
import { createGroupToken } from "../../Utils/JsonWebToken/jsonWebToken.js";
import { UnauthorizedError } from "../../Middleware/RequestErrors/errors.js";
//Get All User Groups
export const getAllUserGroups = async (req, res) => {
  const group = await Investment.find({ users: req.user.userId });
  res.status(StatusCodes.OK).json({ group });
};

//Get Single Group Info
export const setGroupCookie = async (req, res) => {
  const member = await Member.findOne({ uniqueName: req.body.uniqueName });

  if (!member) throw new UnauthorizedError("Invalid Unique Name!");

  const oneHour = 1000 * 60 * 60;
  const groupToken = createGroupToken({
    memberId: member._id,
    role: member.role,
  });
  res.cookie("groupToken", groupToken, {
    httpOnly: true,
    expiresIn: new Date(Date.now() + oneHour),
    secure: process.env.NODE_ENV === "production",
  });

  res.status(StatusCodes.OK).json({ msg: "intializing group!" });
};

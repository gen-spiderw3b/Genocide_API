import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";
import { groupToken } from "../../Utils/JsonWebToken/jsonWebToken.js";

//Get All User Groups
export const getAllUserGroups = async (req, res) => {
  console.log(req);
  const group = await Investment.find({ users: req.user.userId });
  res.status(StatusCodes.OK).json({ group });
};

//Get Single Group Info
export const setGroupCookie = async (req, res) => {
  const user = await Investment.findById(req.params.id);
  const currentUser = req.user.userId;

  const getCurrentUser = user.users.find((item) => {
    return item.toString() === currentUser;
  });

  const oneHour = 1000 * 60 * 60;
  const groupMember = groupToken({ memberId: getCurrentUser.toString() });
  res.cookie("groupMember", groupMember, {
    httpOnly: true,
    expiresIn: new Date(Date.now() + oneHour),
    secure: process.env.NODE_ENV === "production",
  });
  res.status(StatusCodes.OK).json({ msg: "Group Initalized!" });
};

//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "member" });
};

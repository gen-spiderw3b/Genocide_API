import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";
import Member from "../../Schemas/Investments/member.js";
//Get All User Groups
export const getAllUserGroups = async (req, res) => {
  const member = await Member.findOne({ createdBy: req.user.userId });
  const group = await Investment.aggregate([
    {
      $match: { joinedBy: member._id },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "groupMembers",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ group });
};

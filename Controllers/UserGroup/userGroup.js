import { StatusCodes } from "http-status-codes";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  const member = await Member.findOne({ _id: req.user.memberId });
  const investmentGroup = await Investment.findById(req.params.groupId);
  res.status(StatusCodes.OK).json({ member, investmentGroup });
};

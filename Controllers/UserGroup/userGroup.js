import { StatusCodes } from "http-status-codes";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
import Headline from "../../Schemas/UserDashboard/headlineSchema.js";

//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  const member = await Member.findOne({ _id: req.user.memberId });
  const investmentGroup = await Investment.findById(req.params.groupId);
  res.status(StatusCodes.OK).json({ member, investmentGroup });
};

//Create Headline
export const createHeadline = async (req, res) => {
  req.body.createdBy = req.user.memberId;
  const headline = await Headline.create(req.body);
  res.status(StatusCodes.CREATED).json({ headline });
};

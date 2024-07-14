import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";

//Get All User Groups
export const getAllUserGroups = async (req, res) => {
  const group = await Investment.find({ joinedBy: req.user.memberId });
  res.status(StatusCodes.OK).json({ group });
};

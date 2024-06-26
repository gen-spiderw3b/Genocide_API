import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";

//Create Investment Groups
export const createInvestmentGroup = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const group = await Investment.create(req.body);
  res.status(StatusCodes.OK).json({ data: group });
};

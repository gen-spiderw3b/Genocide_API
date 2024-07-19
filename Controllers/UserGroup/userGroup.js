import { StatusCodes } from "http-status-codes";
//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  console.log(req.user);
  const test = "testing";
  res.status(StatusCodes.OK).json({ test });
};

import { StatusCodes } from "http-status-codes";
import Test from "../Schemas/testSchema.js";

//Test
export const setDateTest = async (req, res) => {
  // const test = await Test.create();
  res.status(StatusCodes.CREATED).json({ msg: "testing" });
};

import Wow from "../../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";

export const getAllWowGroups = async (req, res) => {
  const wowGroups = await Wow.find({ games: "world of warcraft" });
  res.status(StatusCodes.OK).json({ Wow: wowGroups });
};

import Wow from "../../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";

export const getAllWowGroups = async (req, res) => {
  const wowGroups = await Wow.find({ games: "world of warcraft" });
  const totalGroups = await Wow.countDocuments({ games: "world of warcraft" });
  const users = await Wow.aggregate([
    {
      $match: {
        games: "world of warcraft",
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "joinedBy",
        foreignField: "_id",
        as: "players",
      },
    },
    {
      $project: {
        players: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ totalGroups, wowGroups, users });
};

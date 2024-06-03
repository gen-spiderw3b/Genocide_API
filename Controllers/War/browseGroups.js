import Groups from "../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";

export const browseGroups = async (req, res) => {
  const { goals, games } = req.query;
  const queryObject = {};

  if (goals && goals !== "none") {
    queryObject.goals = goals;
  }
  if (games && games !== "none") {
    queryObject.games = games;
  }

  //Pageination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 9;
  const skip = (page - 1) * limit;

  const groups = await Groups.find(queryObject).skip(skip).limit(limit);
  const totalGroups = await Groups.countDocuments();
  const numOfPages = Math.ceil(totalGroups / limit);

  res
    .status(StatusCodes.OK)
    .json({ groups, totalGroups, numOfPages, currentPage: page });
};

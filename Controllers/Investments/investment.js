import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";

//Create Investment Groups
export const createInvestmentGroup = async (req, res) => {
  req.body.createdBy = req.user.userId;
  req.body.president = req.user.userId;
  const group = await Investment.create(req.body);
  res.status(StatusCodes.CREATED).json({ group });
};

//Browse Investment Groups
export const browseInvestmentGroups = async (req, res) => {
  const { investment } = req.query;
  const queryObject = {};

  if (investment && investment !== "all") {
    queryObject.investment = investment;
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  const totalGroups = await Investment.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalGroups / limit);
  const groups = await Investment.find(queryObject).skip(skip).limit(limit);
  res.status(StatusCodes.OK).json({ groups, numOfPages, currentPage: page });
};

//Join Investment Groups
export const joinInvestmentGroups = async (req, res) => {
  const groups = await Investment.findByIdAndUpdate(
    req.params.id,
    {
      $push: { associate: req.params.userId },
    },
    {
      new: true,
    }
  );
  res
    .status(StatusCodes.OK)
    .json({ msg: "You Have Joined A Investment Group! " });
};

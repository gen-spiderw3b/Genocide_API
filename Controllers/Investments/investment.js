import { StatusCodes } from "http-status-codes";
import Investment from "../../Schemas/Investments/investments.js";
import mongoose from "mongoose";
import Member from "../../Schemas/Investments/member.js";
import User from "../../Schemas/userSchema.js";
import { POSITION } from "../../Utils/Classes/class.js";

//Create Investment Groups
export const createInvestmentGroup = async (req, res) => {
  //Finding The User
  const user = await User.findOne({ _id: req.user.userId });
  //Creating President
  const member = await Member.create({
    permission: POSITION.PRESIDENT,
    uniqueName: req.body.uniqueName,
    firstName: user.firstName,
    lastName: user.lastName,
    state: user.state,
    city: user.city,
    phoneNumber: user.phoneNumber,
    createdBy: req.user.userId,
  });

  //Creating Group
  req.body.createdBy = req.user.userId;
  const group = await Investment.create(req.body);
  const updateGroup = await Investment.findOneAndUpdate(
    { _id: group._id },
    {
      $push: { joinedBy: member._id, authorize: req.user.userId },
    },

    {
      new: true,
    }
  );
  res.status(StatusCodes.CREATED).json({ updateGroup });
};

//Browse Investment Groups
export const browseInvestmentGroups = async (req, res) => {
  const { investment, state } = req.query;
  const queryObject = {};
  if (investment && investment !== "all") {
    queryObject.investment = investment;
  }
  if (state && state !== "all") {
    queryObject.state = state;
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  const totalGroups = await Investment.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalGroups / limit);
  const groups = await Investment.find(queryObject).limit(limit).skip(skip);
  res.status(StatusCodes.OK).json({ numOfPages, currentPage: page, groups });
};

export const getGroupInfo = async (req, res) => {
  const groupInfo = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.id),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "createdBy",
        foreignField: "_id",
        as: "president",
      },
    },
  ]);

  res.status(StatusCodes.OK).json({ groupInfo });
};

export const createMember = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  req.body.createdBy = req.user.userId;
  req.body.firstName = user.firstName;
  req.body.lastName = user.lastName;
  req.body.state = user.state;
  req.body.city = user.city;
  req.body.permission = POSITION.ASSOCIATE;
  const member = await Member.create(req.body);

  const group = await Investment.findByIdAndUpdate(
    req.params.groupId,
    {
      $push: { joinedBy: member._id, authorize: req.user.userId },
    },
    {
      new: true,
    }
  );

  res.status(StatusCodes.CREATED).json({ member, group });
};

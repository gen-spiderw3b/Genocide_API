import Investment from "../../Schemas/Investments/investments.js";
import Member from "../../Schemas/Investments/member.js";
import { StatusCodes } from "http-status-codes";
import Users from "../../Schemas/userSchema.js";
import mongoose from "mongoose";

//Get Current User
export const currentUser = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};

/*
============
User Profile
============
*/

//User Profiles
export const userProfile = async (req, res) => {
  const user = await Users.findOne({ _id: req.user.userId });
  const investmentGroup = await Investment.aggregate([
    {
      $match: {
        authorize: mongoose.Types.ObjectId.createFromHexString(req.user.userId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "member",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ user, investmentGroup });
};
//Update Profiles
export const updateProfile = async (req, res) => {
  const updateUser = await Users.findByIdAndUpdate(
    req.user.userId,
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      state: req.body.state,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  );
  const members = await Member.updateMany(
    { createdBy: req.user.userId },
    {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      state: req.body.state,
      city: req.body.city,
      phoneNumber: req.body.phoneNumber,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ msg: "you have updated this user!" });
};

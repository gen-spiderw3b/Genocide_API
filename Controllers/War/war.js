import CreateGroup from "../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
//Create Groups
export const createGroup = async (req, res) => {
  //Create a Group
  req.body.createdBy = req.user.userId;
  req.body.joinedBy = req.user.userId;
  const warGroup = await CreateGroup.create(req.body);
  res.status(StatusCodes.CREATED).json({ warGroup });
};

//My Groups
export const myWarGroup = async (req, res) => {
  const myGroup = await CreateGroup.aggregate([
    {
      $match: {
        createdBy: mongoose.Types.ObjectId.createFromHexString(req.user.userId),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "joinedBy",
        foreignField: "_id",
        as: "people",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ myGroup });
};

//Joined Groups
export const joinedGroups = async (req, res) => {
  const joinedGroups = await CreateGroup.find({ joinedBy: req.user.userId });
  res.status(StatusCodes.OK).json({ joinedGroups });
};

//Delete My Groups
export const deleteWarGroup = async (req, res) => {
  const deleteGroup = await CreateGroup.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "WarBand Deleted !" });
};
//Delete Members
export const deleteMember = async (req, res) => {
  const deleteMember = await CreateGroup.findByIdAndUpdate(req.params.id, {
    $pull: { joinedBy: req.params.user },
  });
  res.status(StatusCodes.OK).json({ msg: "Member Deleted !" });
};

//Update My Groups
export const updateWarGroup = async (req, res) => {
  const updateGroup = await CreateGroup.updateOne({ _id: req.params.id });

  const test = await CreateGroup.getIndexes();
  res.status(StatusCodes.OK).json({ updateGroup, test });
};

//Join Group
export const joinWarGroup = async (req, res) => {
  const joinGroup = await CreateGroup.findByIdAndUpdate(
    req.params.id,
    {
      $push: { joinedBy: req.user.userId },
    },
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ joinGroup });
};
//Leave Group
export const leaveWarGroup = async (req, res) => {
  const leaveGroup = await CreateGroup.findByIdAndUpdate(
    req.params.id,
    {
      $pull: { joinedBy: req.user.userId },
    },
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: "You Have Left A WarBand!" });
};

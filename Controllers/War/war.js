import CreateGroup from "../../Schemas/War/war.js";
import { StatusCodes } from "http-status-codes";

//Create Groups
export const createGroup = async (req, res) => {
  //Create a Group
  req.body.createdBy = req.user.userId;
  req.body.joinedBy = req.user.userId;
  const warGroup = await CreateGroup.create(req.body);
  res.status(StatusCodes.CREATED).json({ warGroup });
};

//Browse Groups
export const browseGroup = async (req, res) => {
  const groups = await CreateGroup.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "joinedBy",
        foreignField: "_id",
        as: "joinedBy",
      },
    },
    {
      $project: {
        _id: 1,
        games: 1,
        groupName: 1,
        players: 1,
        goals: 1,
        desc: 1,
        createdBy: 1,
        joinedBy: 1,
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ groups });
};

//My Groups
export const myWarGroup = async (req, res) => {
  const myGroup = await CreateGroup.find({ createdBy: req.user.userId });
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

//Update My Groups
export const updateWarGroup = async (req, res) => {
  const updateGroup = await CreateGroup.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(StatusCodes.OK).json({ msg: "Group has been Updated!" });
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
  res.status(StatusCodes.OK).json({ msg: "You Have Joined A WarBand!" });
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

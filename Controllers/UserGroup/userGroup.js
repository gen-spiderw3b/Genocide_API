import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
import Headline from "../../Schemas/UserDashboard/headlineSchema.js";
import Schedule from "../../Schemas/UserDashboard/scheduleSchema.js";
import SubGroup from "../../Schemas/UserDashboard/subGroup.js";
import { POSITION } from "../../Utils/Classes/class.js";

/*
================
Members
================
*/

//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  const member = await Member.findOne({ _id: req.user.memberId });
  res.status(StatusCodes.OK).json({ member });
};

//get All Members
export const getAllMembers = async (req, res) => {
  const groupMembers = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ groupMembers });
};

/*
================
Headline
================
*/

//Create Headline
export const createHeadline = async (req, res) => {
  req.body.madeBy = req.params.groupId;
  const headline = await Headline.create(req.body);
  res.status(StatusCodes.CREATED).json({ headline });
};
//View Headline
export const viewHeadline = async (req, res) => {
  const viewHeadline = await Headline.find({ madeBy: req.params.groupId });
  res.status(StatusCodes.CREATED).json({ viewHeadline });
};
//Delete Headline
export const deleteHeadlines = async (req, res) => {
  const deleteHeadlines = await Headline.findOneAndDelete({
    _id: req.params.id,
  });
  res.status(StatusCodes.CREATED).json({ msg: "you have deleted a headline" });
};

/*
================
Schedule
================
*/

//Create Schedule
export const createSchedule = async (req, res) => {
  const date = await Schedule.create({
    title: req.body.title,
    start: req.body.start,
    start_time: `${req.body.start} ${req.body.start_time}`,
    end: req.body.end,
    end_time: `${req.body.end} ${req.body.end_time}`,
    createdBy: req.user.memberId,
  });
  const group = await Investment.findByIdAndUpdate(
    req.params.groupId,
    {
      $push: { dates: date },
    },
    { new: true }
  );
  res.status(StatusCodes.CREATED).json({ date });
};

//Get Schedule
export const getSchedule = async (req, res) => {
  const schedule = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "schedules",
        foreignField: "_id",
        localField: "dates",
        as: "dates",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ schedule });
};

//Delete Schedule
export const deleteDates = async (req, res) => {
  const date = await Schedule.findOneAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ msg: "date deleted!" });
};

/*
================
Subgroup
================
*/

//Create SubGroup
export const createSubgroup = async (req, res) => {
  req.body.createdBy = req.user.memberId;
  req.body.madeBy = req.params.groupId;
  const createdSubgroup = await SubGroup.create(req.body);
  res.status(StatusCodes.CREATED).json({ createdSubgroup });
};

//View CreatedSubGroups
export const viewCreatedSubGroups = async (req, res) => {
  const subgroups = await SubGroup.aggregate([
    {
      $match: {
        createdBy: mongoose.Types.ObjectId.createFromHexString(
          req.user.memberId
        ),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ subgroups });
};
//View subGroup As Team ledaer
export const viewTeamLeaderGroup = async (req, res) => {
  const teamLeaderGroup = await SubGroup.aggregate([
    {
      $match: {
        teamLeader: mongoose.Types.ObjectId.createFromHexString(
          req.user.memberId
        ),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ teamLeaderGroup });
};

//View Both Groups
export const allGroups = async (req, res) => {
  const subgroups = await SubGroup.aggregate([
    {
      $match: {
        joinedBy: mongoose.Types.ObjectId.createFromHexString(
          req.user.memberId
        ),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  const groupMembers = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ subgroups, groupMembers });
};

//Delete Subgroup
export const deleteSubgroup = async (req, res) => {
  const deleteSubgroup = await SubGroup.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: "you have deleted a subgroup!" });
};

//Process Subgroup Member
export const processMember = async (req, res) => {
  const member = await Member.findById(req.params.memberId);

  const subGroup = await SubGroup.findByIdAndUpdate(
    req.params.subgroupId,
    {
      $push: { joinedBy: member._id },
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ msg: "you have assigned a new member!" });
};

//Update User In Subgroup
export const teamLeader = async (req, res) => {
  const teamLeader = await SubGroup.findByIdAndUpdate(
    req.body.groupId,

    {
      teamLeader: req.body.memberId,
    },

    { new: true }
  );
  const updatedMember = await Member.findByIdAndUpdate(
    req.body.memberId,
    {
      permission: POSITION.TEAM_LEADER,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ msg: "you have set a new team leader" });
};

//Remove member
export const removeMember = async (req, res) => {
  const currentMember = await Member.findById(req.body.memberId);
  if (currentMember.permission.role === "president") {
    const removeMember = await SubGroup.findByIdAndUpdate(
      req.body.groupId,
      {
        $pull: { joinedBy: req.body.memberId },
      },
      { new: true }
    );
  } else {
    const updatedMember = await Member.findByIdAndUpdate(
      req.body.memberId,

      {
        permission: POSITION.TEAM_LEADER,
      },
      { new: true }
    );
    const removeMember = await SubGroup.findByIdAndUpdate(
      req.body.groupId,
      {
        $pull: { joinedBy: req.body.memberId },
      },
      { new: true }
    );
  }

  res.status(StatusCodes.OK).json({ msg: "you have removed a member" });
};

//Get SubMembers groups
export const getAllSubgroups = async (req, res) => {
  const subgroups = await SubGroup.aggregate([
    {
      $match: {
        joinedBy: mongoose.Types.ObjectId.createFromHexString(
          req.user.memberId
        ),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "members",
      },
    },
  ]);
  res.status(StatusCodes.OK).json({ subgroups });
};

/*
================
Promotion
================
*/

//President
export const createPresident = async (req, res) => {
  const group = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "checkMembers",
      },
    },
  ]);
  const checkGroup = group[0].checkMembers.filter((person) => {
    return person.permission.role === "president";
  });

  if (checkGroup.length === 1) {
    const changeRole = await Member.findByIdAndUpdate(
      req.params.memberId,
      {
        permission: POSITION.PRESIDENT,
      },
      { new: true }
    );
  } else {
    throw new Error("you must remove a president!");
  }
  res.status(StatusCodes.OK).json({ msg: "you have selected a new president" });
};
//Vice President
export const createVicePresident = async (req, res) => {
  const group = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "checkMembers",
      },
    },
  ]);
  const checkGroup = group[0].checkMembers.filter((person) => {
    return person.permission.role === "vice president";
  });

  if (checkGroup.length === 0) {
    const changeRole = await Member.findByIdAndUpdate(
      req.params.memberId,
      {
        permission: POSITION.VICE_PRESIDENT,
      },
      { new: true }
    );
  } else {
    throw new Error("already have a vice president!");
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "you have selected a new vice president" });
};
//Treasurer
export const createTreasurer = async (req, res) => {
  const group = await Investment.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.groupId),
      },
    },
    {
      $lookup: {
        from: "members",
        localField: "joinedBy",
        foreignField: "_id",
        as: "checkMembers",
      },
    },
  ]);
  const checkGroup = group[0].checkMembers.filter((person) => {
    return person.permission.role === "treasurer";
  });

  if (checkGroup.length === 0) {
    const changeRole = await Member.findByIdAndUpdate(
      req.params.memberId,
      {
        permission: POSITION.TREASURER,
      },
      { new: true }
    );
  } else {
    throw new Error("already have a treasurer!");
  }
  res.status(StatusCodes.OK).json({ msg: "you have selected a new treasurer" });
};
//Associate
export const createAssociate = async (req, res) => {
  const changeRole = await Member.findByIdAndUpdate(
    req.params.memberId,
    {
      permission: POSITION.ASSOCIATE,
    },
    { new: true }
  );

  res.status(StatusCodes.OK).json({ msg: "you have selected a new associate" });
};

/*
================
Links
================
*/

//TeamLeader Update link
export const updateLink = async (req, res) => {
  const updatedLink = await SubGroup.findByIdAndUpdate(
    req.params.subgroupId,
    {
      link: req.body.link,
    },
    { new: true }
  );
  res.status(StatusCodes.OK).json({ updateLink });
};

//View All Links
export const viewAllLinks = async (req, res) => {
  const subgroup = await SubGroup.find({ madeBy: req.params.groupId });
  const headline = await Headline.find({ madeBy: req.params.groupId });
  res.status(StatusCodes.OK).json({ subgroup, headline });
};

/*
=======================
Delete Investment Group
=======================
*/

//Delete Investment Group
export const deleteInvestmentGroup = async (req, res) => {
  const deleteGroup = await Investment.findByIdAndDelete(req.params.groupId);
  const deleteAllMembers = await Member.deleteMany({
    groupJoined: mongoose.Types.ObjectId.createFromHexString(
      req.params.groupId
    ),
  });
  res
    .status(StatusCodes.OK)
    .json({ msg: "you have deleted this investment group!" });
};

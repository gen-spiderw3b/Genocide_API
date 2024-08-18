import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
import Headline from "../../Schemas/UserDashboard/headlineSchema.js";
import Schedule from "../../Schemas/UserDashboard/scheduleSchema.js";
import SubGroup from "../../Schemas/UserDashboard/subGroup.js";
import { POSITION } from "../../Utils/Classes/class.js";
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
//Create Headline
export const createHeadline = async (req, res) => {
  req.body.createdBy = req.user.memberId;
  const headline = await Headline.create(req.body);
  res.status(StatusCodes.CREATED).json({ headline });
};

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

//Create SubGroup
export const createSubgroup = async (req, res) => {
  req.body.createdBy = req.user.memberId;
  const createdSubgroup = await SubGroup.create(req.body);
  res.status(StatusCodes.CREATED).json({ createdSubgroup });
};

//View CreatedSubGroups
export const viewCreatedSubgroups = async (req, res) => {
  const viewCreatedSubgroups = await SubGroup.aggregate([
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

  res.status(StatusCodes.OK).json({ viewCreatedSubgroups });
};
//Process Member
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

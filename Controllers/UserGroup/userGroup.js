import { StatusCodes } from "http-status-codes";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
import Headline from "../../Schemas/UserDashboard/headlineSchema.js";
import Schedule from "../../Schemas/UserDashboard/scheduleSchema.js";
import SubGroup from "../../Schemas/UserDashboard/subGroup.js";
import mongoose from "mongoose";

//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  const member = await Member.findOne({ _id: req.user.memberId });
  res.status(StatusCodes.OK).json({ member });
};

//Create Headline
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

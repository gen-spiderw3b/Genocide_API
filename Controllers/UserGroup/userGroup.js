import { StatusCodes } from "http-status-codes";
import Member from "../../Schemas/Investments/member.js";
import Investment from "../../Schemas/Investments/investments.js";
import Headline from "../../Schemas/UserDashboard/headlineSchema.js";
import Schedule from "../../Schemas/UserDashboard/scheduleSchema.js";
import mongoose from "mongoose";
//Get CurrentMember
export const getCurrentMember = async (req, res) => {
  const member = await Member.findOne({ _id: req.user.memberId });
  const investmentGroup = await Investment.findById(req.params.groupId);
  res.status(StatusCodes.OK).json({ member, investmentGroup });
};

//Create Headline
export const createHeadline = async (req, res) => {
  req.body.createdBy = req.user.memberId;
  const headline = await Headline.create(req.body);
  res.status(StatusCodes.CREATED).json({ headline });
};

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

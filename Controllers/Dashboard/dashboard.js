import DashHeadline from "../../Schemas/Dashboard/dash_headline.js";
import DashSchedule from "../../Schemas/Dashboard/dashScheduleSchema.js";
import { StatusCodes } from "http-status-codes";
import mongoose from "mongoose";

/*
==============
DASH HEADLINES
==============
*/
//Create Headline
export const createHeadline = async (req, res) => {
  req.body.madeBy = req.user.userId;
  const headline = await DashHeadline.create(req.body);
  res.status(StatusCodes.CREATED).json({ headline });
};
//View Headline
export const viewHeadline = async (req, res) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 6;
  const skip = (page - 1) * limit;
  const totalHeadlines = await DashHeadline.find({}).countDocuments();
  const numOfPages = Math.ceil(totalHeadlines / limit);
  const viewHeadline = await DashHeadline.find({}).skip(skip).limit(limit);
  res
    .status(StatusCodes.CREATED)
    .json({ viewHeadline, numOfPages, currentPage: page });
};
//Delete Headline
export const deleteHeadlines = async (req, res) => {
  const deleteHeadlines = await DashHeadline.findOneAndDelete({
    _id: req.params.id,
  });
  res.status(StatusCodes.CREATED).json({ msg: "you have deleted a headline" });
};

/*
=============
DASH SCHEDULE
=============
*/

//Create Schedule
export const createSchedule = async (req, res) => {
  const date = await DashSchedule.create({
    title: req.body.title,
    start: req.body.start,
    start_time: `${req.body.start} ${req.body.start_time}`,
    end: req.body.end,
    end_time: `${req.body.end} ${req.body.end_time}`,
    createdBy: req.user.userId,
  });
  res.status(StatusCodes.CREATED).json({ date });
};

//Get Schedule
export const getSchedule = async (req, res) => {
  const schedule = await DashSchedule.find({});
  res.status(StatusCodes.OK).json({ schedule });
};

//Delete Schedule
export const deleteDates = async (req, res) => {
  const date = await Schedule.findOneAndDelete({ _id: req.params.id });
  res.status(StatusCodes.OK).json({ msg: "date deleted!" });
};

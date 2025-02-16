import { StatusCodes } from "http-status-codes";
import File from "../../Schemas/File/file.js";
import Section from "../../Schemas/File/section.js";
import Course from "../../Schemas/File/course.js";
import mongoose from "mongoose";

export const createFullCourse = async (req, res) => {
  const { course, section, title, src } = req.body;
  const oldCourse = await Course.findOne({ course: course });
  if (oldCourse.course === course) {
    return res
      .status(StatusCodes.CONFLICT)
      .json({ msg: "course has already been created!" });
  }

  const file = await File.create({
    course: course,
    section: section,
    title: title,
    src: src,
    createdBy: req.user.userId,
  });

  const newSection = await Section.create({
    section: section,
    course: course,
    createdBy: req.user.userId,
  });

  const uploadSection = await Section.findByIdAndUpdate(
    { _id: newSection._id },
    {
      $push: { file: file._id },
    },
    {
      new: true,
    }
  );

  const newCourse = await Course.create({
    course: course,
    createdBy: req.user.userId,
  });

  const uploadCourse = await Course.findByIdAndUpdate(
    { _id: newCourse._id },
    {
      $push: { section: uploadSection._id },
    },
    {
      new: true,
    }
  );
  res.status(StatusCodes.CREATED).json({ msg: "FullCourse has been created" });
};

//GetAllCourses
export const getAllCourses = async (req, res) => {
  const courses = await Course.find({});
  res.status(StatusCodes.OK).json({ courses });
};

//GetSingleCourse
export const getCourse = async (req, res) => {
  const course = await Course.aggregate([
    {
      $match: {
        _id: mongoose.Types.ObjectId.createFromHexString(req.params.courseId),
      },
    },
    {
      $lookup: {
        from: "sections",
        localField: "section",
        foreignField: "_id",
        as: "newSection",
        pipeline: [
          {
            $lookup: {
              from: "files",
              localField: "file",
              foreignField: "_id",
              as: "newFile",
            },
          },
        ],
      },
    },
    {
      $project: { newSection: 1 },
    },
  ]);
  res.status(StatusCodes.OK).json({ course });
};

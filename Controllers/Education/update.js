import { StatusCodes } from "http-status-codes";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";
import File from "../../Schemas/File/file.js";
import Section from "../../Schemas/File/section.js";
import Course from "../../Schemas/File/course.js";
import mongoose from "mongoose";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const findCourses = async (req, res) => {
  const course = await Course.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ course });
};
export const findCourse = async (req, res) => {
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
        as: "sections",
        pipeline: [
          {
            $lookup: {
              from: "files",
              localField: "file",
              foreignField: "_id",
              as: "files",
            },
          },
        ],
      },
    },
    {
      $project: { _id: 1, sections: 1, files: 1 },
    },
  ]);
  res.status(StatusCodes.OK).json({ course });
};

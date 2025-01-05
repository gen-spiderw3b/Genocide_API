import { StatusCodes } from "http-status-codes";
import File from "../../Schemas/File/file.js";
import Section from "../../Schemas/File/section.js";
import Course from "../../Schemas/File/course.js";

export const createFullCourse = async (req, res) => {
  const { course, section, title, src } = req.body;
  const file = await File.create({ title: title, src: src });
  const newSection = await Section.create({ section: section });
  const uploadSection = await Section.findByIdAndUpdate(
    { _id: newSection._id },
    {
      $push: { file: file._id },
    },
    {
      new: true,
    }
  );
  const newCourse = await Course.create({ course: course });
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

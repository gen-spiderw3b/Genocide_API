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

//Find Courses
export const findCourses = async (req, res) => {
  const course = await Course.find({ createdBy: req.user.userId });
  res.status(StatusCodes.OK).json({ course });
};

//Find Course
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
      $project: { _id: 1, course: 1, sections: 1, files: 1 },
    },
  ]);
  res.status(StatusCodes.OK).json({ course });
};

//Add Section
export const addSection = async (req, res) => {
  const { section, courseId, courseName } = req.body;
  fs.readdir(
    path.join(__dirname, `../../public/upload/${courseName}`),
    (err, files) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "something went wrong!" });
      } else {
        if (files.includes(`${section}`)) {
          res
            .status(StatusCodes.ACCEPTED)
            .json({ msg: `section ${section} has already been made!` });
        } else {
          fs.mkdir(
            path.join(
              __dirname,
              `../../public/upload/${courseName}/${section}`
            ),
            { recursive: true },
            async (err) => {
              if (err) {
                res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({ msg: "something went wrong!" });
              } else {
                const newSection = await Section.create({
                  course: courseName,
                  section: `${section}`,
                  createdBy: req.user.userId,
                });
                const course = await Course.findByIdAndUpdate(
                  { _id: courseId },
                  {
                    $push: { section: newSection._id },
                  },
                  {
                    new: true,
                  }
                );
                res
                  .status(StatusCodes.CREATED)
                  .json({ msg: `section ${section} has been created!` });
              }
            }
          );
        }
      }
    }
  );
};

//Remove Section
export const removeSection = (req, res) => {
  const { section, courseId, courseName, sectionId } = req.body;
  fs.readdir(
    path.join(__dirname, `../../public/upload/${courseName}`),
    async (err, files) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "something went wrong!" });
      }
      if (files.includes(`${section}`)) {
        fs.rm(
          path.join(__dirname, `../../public/upload/${courseName}/${section}`),
          { recursive: true },
          async (err) => {
            if (err) {
              res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json({ msg: "something went wrong!" });
            } else {
              //Remove File
              const removeFiles = await File.deleteMany({ course: courseName });
              //Delete Section
              const deletedSection = await Section.findByIdAndDelete({
                _id: sectionId,
              });
              //Remove From Course
              const course = await Course.findByIdAndUpdate(
                { _id: courseId },
                { $pull: { section: sectionId } },
                { new: true }
              );
              res
                .status(StatusCodes.OK)
                .json({ msg: `section ${section} has been removed!` });
            }
          }
        );
      }
    }
  );
};

//AddFile
export const addFile = (req, res) => {
  const { file } = req.files;
  const { courseName, section } = req.body;
  fs.readdir(
    path.join(__dirname, `../../public/upload/${courseName}/${section}`),
    async (err, files) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "something went wrong!" });
      } else {
        if (files.includes(`${file.name}`)) {
          res
            .status(StatusCodes.ACCEPTED)
            .json({ msg: ` sorry but ${file.name} has already been made!` });
        } else {
          let filePath = path.join(
            __dirname,
            `../../public/upload/${courseName}/${section}/` + `${file.name}`
          );

          await file.mv(filePath);
          return res.status(StatusCodes.CREATED).json({
            file: {
              src: `/upload/${courseName}/${section}/${file.name}`,
              msg: "file has been uploaded!",
            },
          });
        }
      }
    }
  );
};

//Complete Add File
export const addFileSubmit = async (req, res) => {
  const { src, title, sectionId, section, courseName } = req.body;
  const newFile = await File.create({
    course: courseName,
    section: section,
    title: title,
    src: src,
    createdBy: req.user.userId,
  });
  const newSection = await Section.findByIdAndUpdate(
    { _id: sectionId },
    { $push: { file: newFile._id } },
    { new: true }
  );

  res
    .status(StatusCodes.CREATED)
    .json({ msg: `${courseName} course has been updated!` });
};

//RemoveFile
export const removeFile = async (req, res) => {
  const { file, src, section, sectionText, courseName, upload, courseText } =
    req.body;

  function getUpload(str) {
    const newUpload = str.length;
    return newUpload;
  }
  function getCourse(str) {
    const newCourseLength = str.length;
    return newCourseLength;
  }
  function getSection(str) {
    const newSectionLength = str.length;
    return newSectionLength;
  }

  let uploadLength = getUpload(`${upload}`);
  let courseTextLength = getUpload(`${courseText}`);
  let sectionTextLength = getUpload(`${sectionText}`);
  let totalLength = uploadLength + courseTextLength + sectionTextLength;
  const fileName = src.slice(totalLength);

  fs.readdir(
    path.join(__dirname, `../../public/upload/${courseName}/${section}`),
    (err, files) => {
      if (err) {
        res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json({ msg: "something went wrong!" });
      } else {
        if (files.includes(`${fileName}`)) {
          fs.unlink(
            path.join(
              __dirname,
              `../../public/upload/${courseName}/${section}/${fileName}`
            ),
            async (err) => {
              if (err) {
                res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json({ msg: "something went wrong!" });
                return;
              }
              const removeFile = await Section.findOneAndUpdate(
                {
                  section: section,
                },
                {
                  $pull: { file: file },
                },
                { new: true }
              );
              const deleteFile = await File.findByIdAndDelete(file);
              res
                .status(StatusCodes.OK)
                .json({ msg: "this file was deleted!" });
            }
          );
        } else {
          res
            .status(StatusCodes.ACCEPTED)
            .json({ msg: "this file was not found!" });
        }
      }
    }
  );
};

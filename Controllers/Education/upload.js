import { StatusCodes } from "http-status-codes";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";
import fs from "fs";
const __dirname = dirname(fileURLToPath(import.meta.url));

export const checkCourse = (req, res) => {
  const { course } = req.body;
  fs.readdir("/public", (err, files) => {
    if (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "there was a error with routing, contact me so i can fix it!",
      });
    } else {
      if (files.includes(`${course}`)) {
        res
          .status(StatusCodes.ACCEPTED)
          .json({ msg: `${course} has already been made!` });
      } else {
        fs.mkdir(`/public/${course}`, { recursive: true }, (err) => {
          if (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              msg: "Error with creating course directory, contact me so i can fix this!",
            });
          } else {
            res
              .status(StatusCodes.CREATED)
              .json({ msg: `${course} has been made!` });
          }
        });
      }
    }
  });
};

export const checkSection = (req, res) => {
  const { section, course } = req.body;
  fs.readdir(`/public/${course}`, (err, files) => {
    if (err) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        msg: "there was a error with routing, contact me so i can fix it!",
      });
    } else {
      if (files.includes(`${section}`)) {
        res
          .status(StatusCodes.ACCEPTED)
          .json({ msg: "section" + `${section} has already been made!` });
      } else {
        fs.mkdir(`/public/${course}/${section}`, { recursive: true }, (err) => {
          if (err) {
            res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
              msg: "Error with creating course directory, contact me so i can fix this!",
            });
          } else {
            res
              .status(StatusCodes.CREATED)
              .json({ msg: "section" + `${section} has been made!` });
          }
        });
      }
    }
  });
};

export const fileUpload = async (req, res) => {
  const file = req.files.file;
  const { course, section } = req.body;
  fs.readdir(
    path.join(__dirname, `../../public/upload/${course}/${section}`),
    async (err, files) => {
      if (err) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
          msg: "there was a error with routing, contact me so i can fix it!",
        });
      } else {
        if (files.includes(`${file.name}`)) {
          res
            .status(StatusCodes.ACCEPTED)
            .json({ msg: ` file: ${file.name} has already been made!` });
        } else {
          const filePath = path.join(
            __dirname,
            `../../public/upload/${course}/${section}/` + `${file.name}`
          );
          await file.mv(filePath);
          return res.status(StatusCodes.CREATED).json({
            file: {
              src: `/upload/${course}/${section}/${file.name}`,
              msg: "file has been uploaded succesfully",
            },
          });
        }
      }
    }
  );
};

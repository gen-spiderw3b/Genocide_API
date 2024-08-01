import { body, validationResult } from "express-validator";
import { BadRequestError } from "../RequestErrors/errors.js";
import { CATEGORY } from "../../Utils/Classes/class.js";

//Validate Errors
export const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errMessage = errors.array().map((error) => error.msg);
        throw new BadRequestError(errMessage);
      }
      next();
    },
  ];
};

//Create Headline
export const createHeadlineValidate = withValidationErrors([
  body("category")
    .isIn(Object.values(CATEGORY))
    .withMessage("please pick a category"),
  body("headline").notEmpty().withMessage("please choose a headline"),
  body("desc")
    .notEmpty()
    .withMessage("please fill out a description")
    .isLength({ min: 20 })
    .withMessage("please write at least 20 characters!"),
]);

//Create Schedule
export const createScheduleValidate = withValidationErrors([
  body("title").notEmpty().withMessage("please pick a title"),
  body("start").notEmpty().withMessage("please choose a date"),
  body("start_time")
    .notEmpty()
    .withMessage("please choose a the starting time"),
  body("end").notEmpty().withMessage("please choose a date"),
  body("end_time").notEmpty().withMessage("please choose a the ending time"),
]);

//View Subgroups
export const createSubgroups = withValidationErrors([
  body("subgroupName")
    .notEmpty()
    .withMessage("please provide a sub group name"),
]);

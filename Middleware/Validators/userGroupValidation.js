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

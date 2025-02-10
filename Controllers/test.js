import { StatusCodes } from "http-status-codes";
// import Test from "../Schemas/testSchema.js";
import fs from "fs";

//Test
export const mountPath = async (req, res) => {
  const { testPath } = req.body;

  fs.mkdir(`/uploads/${testPath}`, { recursive: true }, (err) => {
    if (err) {
      return err;
    }
    console.log("it worked");
  });
  res.status(StatusCodes.CREATED).json({ msg: "testing" });
};

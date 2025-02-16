import { StatusCodes } from "http-status-codes";
import fs from "fs";

export const playVideo = (req, res) => {
  const { path } = req.body;

  if (fs.existsSync(path)) {
    console.log(true);
  } else {
    console.log(false);
  }

  //   res.sendFile(path, (err) => {
  //     if (err) {
  //       return res
  //         .status(StatusCodes.INTERNAL_SERVER_ERROR)
  //         .json({ msg: "Error while sending the file" });
  //     }
  //   });
  // } else {
  //   res.status(StatusCodes.NOT_FOUND).json({ msg: "File not found" });
  // }
};

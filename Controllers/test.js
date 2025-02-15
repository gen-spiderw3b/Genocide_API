import fs from "fs";

//Test
export const mountPath = async (req, res) => {
  const filePath2 = "/uploads/math/1/section1-1.mp4";
  if (fs.existsSync(filePath2)) {
    res.sendFile(filePath2, (err) => {
      if (err) {
        console.error(err);
        return res.status(500).send("Error while sending the file");
      }
    });
  } else {
    res.status(404).send("File not found");
  }
};

import multer from "multer";
import path from "path";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const { course, section } = req.body;
    const fileName = file.originalname;
    const dir = `/uploads/${course}/${section}`;
    const filePath = path.join(dir, fileName);
    cb(null, filePath);
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({
  storage: fileStorageEngine,
  fileFilter: (req, file, cb) => {
    if (file.mimetype == "video/mp4") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("only mp4 file types are accepted!"));
    }
  },
});
export default upload;

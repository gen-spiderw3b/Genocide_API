import multer from "multer";

const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const { course, section } = req.body;
<<<<<<< HEAD
    const fileName = file.originalname;
    const dir = `/uploads/${course}/${section}`;
    const filePath = path.join(dir, fileName);
    cb(null, filePath);
=======
    const dir = `/uploads/${course}/${section}`;
    cb(null, dir);
>>>>>>> 49edacaac489104008a02c4a4a17a4334b4b5ce7
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

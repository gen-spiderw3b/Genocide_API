//Imports
import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import multer from "multer";
import fs from "fs";
import { exists } from "node:fs";
import { dirname } from "path";
import { StatusCodes } from "http-status-codes";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
import cloudinary from "cloudinary";
dotenv.config();

//Custom Imports
import errorHandler from "./Middleware/ErrorHandler/errorHandlerMiddleware.js";
import UserRouter from "./Routes/userRoutes.js";
import warRoutes from "./Routes/War/war.js";
import UserAuthRouter from "./Routes/Users/user.js";
import DashboardRouter from "./Routes/Dashboard/dashboard.js";
import InvestmentRouter from "./Routes/Investments/investment.js";
import GroupInvestmentRouter from "./Routes/GroupInvestment/groupInvestment.js";
import UserGroupRouter from "./Routes/UserGroup/userGroup.js";
import ContactRouter from "./Routes/Contact/contact.js";
import EducationRouter from "./Routes/Education/fileUpload.js";
//Test
import TestRouter from "./Routes/test.js";
//Dashboard Auth
import { authMiddleWare } from "./Middleware/AuthMiddleWare/authMiddleWare.js";

/***********************
 Variables && Middleware
 ***********************/
const app = express();
const port = process.env.PORT || 5500;
app.use(express.json());
app.use(cookieParser());
if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}

/**********
 CLOUDINARY
 *********/
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

/*************
 Multer Upload
 *************/
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    const { course, section } = req.body;
    let path = `/public/${course}/${section}`;
    fs.exists(path, (exist) => {
      if (!exist) {
        return fs.mkdir(path, (error) => cb(error, path));
      }
      return cb(null, path);
    });
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: fileStorageEngine });

app.post("/api/v1/education/upload", upload.single("file"), (req, res) => {
  const { originalname } = req.file;
  const { course, section } = req.body;
  res.status(StatusCodes.CREATED).json({
    file: {
      src: `/${course}/${section}/${originalname}`,
      msg: "file has been uploaded!",
    },
  });
});

//EndPoints
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/users", authMiddleWare, UserAuthRouter);
app.use("/api/v1/dash", authMiddleWare, DashboardRouter);
app.use("/api/v1/war", authMiddleWare, warRoutes);
app.use("/api/v1/investment", authMiddleWare, InvestmentRouter);
app.use(
  "/api/v1/investment/select-group",
  authMiddleWare,
  GroupInvestmentRouter
);
app.use("/api/v1/investment/user-group", authMiddleWare, UserGroupRouter);
app.use("/api/v1/investment/user-group/contact", authMiddleWare, ContactRouter);
app.use("/api/v1/education", authMiddleWare, EducationRouter);
app.use("/api/v1/test", TestRouter);
//End Of Endpoints

//Building Front-End Progomatically
const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
//End Of Building Front-End Progomatically

//Route Not Found
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Route Not Found!" });
});

//Error Handler Middleware
app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(
        `Server is running on ${port},and you are connected to the database!`
      )
    );
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
};

start();

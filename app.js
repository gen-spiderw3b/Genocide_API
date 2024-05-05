//Imports
import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
dotenv.config();
//Custom Imports
import errorHandler from "./Middleware/errorHandlerMiddleware.js";
import UserRouter from "./Routes/userRoutes.js";
const app = express();
const port = process.env.PORT || 5500;

if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}
//EndPoints
app.use("/api/v1/user", UserRouter);

//Route Not Found
app.use("*", (req, res) => {
  res.status(404).json({ msg: "Route Not Found!" });
});

//Error Handler Middleware
app.use(errorHandler);

//Building Front-End Progomatically

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});

//End Of Building Front-End Progomatically

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

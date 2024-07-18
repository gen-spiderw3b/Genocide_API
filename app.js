//Imports
import "express-async-errors";
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import cookieParser from "cookie-parser";
dotenv.config();
//Custom Imports
import errorHandler from "./Middleware/ErrorHandler/errorHandlerMiddleware.js";
import UserRouter from "./Routes/userRoutes.js";
import warRoutes from "./Routes/War/war.js";
import UserAuthRouter from "./Routes/Users/user.js";
import InvestmentRouter from "./Routes/Investments/investment.js";
import GroupInvestmentRouter from "./Routes/GroupInvestment/groupInvestment.js";
//Dashboard Auth
import { authMiddleWare } from "./Middleware/AuthMiddleWare/authMiddleWare.js";

//Variables && MiddleWare
const app = express();
const port = process.env.PORT || 5500;
app.use(express.json());
app.use(cookieParser());

if ((process.env.NODE_ENV = "development")) {
  app.use(morgan("dev"));
}
//EndPoints
app.use("/api/v1/user", UserRouter);
app.use("/api/v1/users", authMiddleWare, UserAuthRouter);
app.use("/api/v1/war", authMiddleWare, warRoutes);
app.use("/api/v1/investment", authMiddleWare, InvestmentRouter);
app.use(
  "/api/v1/investment/select-group",
  authMiddleWare,
  GroupInvestmentRouter
);

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

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import mongoDBConnect from "./config/mongoDB.js";
import userRouter from "./route/user.js";
import errorHandler from "./middlewares/errorhandler.js";

// initialization
const app = express();
dotenv.config();

// environment vars
const PORT = process.env.PORT || 9090;

// set middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static folder
app.use(express.static("public"));

// routing
app.use("/api/v1/user", userRouter);

// error handler
app.use(errorHandler);

// app listen
app.listen(PORT, () => {
  mongoDBConnect();
  console.log(`server is running on port ${PORT}`.bgGreen.black);
});

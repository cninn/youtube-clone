import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/usersroute.js";
import commentsRoute from "./routes/commentsroute.js";
import videosRoute from "./routes/videosroute.js";
import authRoute from "./routes/authroute.js";
import cookieParser from "cookie-parser";
import cors from 'cors'

const app = express();

dotenv.config();

//!DATABASE CONNECTİON
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("database connection successful"))
  .catch((err) => console.log(err));

  app.use(cors({
    origins: "http://localhost:3000",
  }));

//! ROUTES
app.use(cookieParser());
app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/comments", commentsRoute);
app.use("/api/videos", videosRoute);
app.use("/api/auth", authRoute);

//!ERROR HANDLİNG
app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong!";
  return res.status(status).json({
    success: false,
    status: status,
    message: message,
  });
});

app.listen(8800, () => {
  console.log("server uyandı!");
});

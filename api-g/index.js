import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cors from "cors";

const app = express();
dotenv.config({path:"../.env"});


//--------------------------------------------------IMPORTANT----------------------------------------------------------------
import mongoose, { connect } from "mongoose";
import cookieParser from "cookie-parser";
mongoose.set("strictQuery", true);
const DB= `${process.env.DATABASE }`;

mongoose.connect(
  DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);
//--------------------------------------------------IMPORTANT----------------------------------------------------------------


//middleware
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/users", usersRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMsg = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMsg,
    stack: err.stack,
  });
});

app.listen(8800, () => {
  console.log("Connected to backend!");
});

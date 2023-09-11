import express from "express";
import User from "../models/userModel.js";
import { createError } from "../utils/error.js";
import {
  deleteUser,
  getAllUser,
  getUser,
  updateUser,
} from "../controllers/usercon.js";
import { verifyAdmin, verifyToken,verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello Admin you are logged in and you can delete your account");
// });

//UPDATE
router.put("/:id", verifyUser, updateUser);

//DELETE
router.delete("/:id", verifyUser,deleteUser);

//GET
router.get("/:id",verifyUser, getUser);

//GET ALL
router.get("/", verifyAdmin,getAllUser);

export default router;

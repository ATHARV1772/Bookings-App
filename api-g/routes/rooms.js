import express from "express";
import Room from "../models/roomModel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";
import {
  createRoom,
  deleteRoom,
  getAllRoom,
  getRoom,
  updateRoom,
  updateRoomAvailability,
} from "../controllers/roomcon.js";

const router = express.Router();

//CREATE
router.post("/:hotelId", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom);

//GET
router.get("/:id", getRoom);

//GET ALL
router.get("/", getAllRoom);

export default router;



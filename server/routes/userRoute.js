import express from "express";
import {
  createUser,
  deleteUser,
  getUsers,
} from "../controllers/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .get(protect, admin, getUsers)
  .post(protect, admin, createUser);

router.route("/:id").delete(protect, admin, deleteUser);

export default router;

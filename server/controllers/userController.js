import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
});

export { getUsers };

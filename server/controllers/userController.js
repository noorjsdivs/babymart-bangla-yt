import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({}).select("-password");
  res.json(users);
});

// Create a user
const createUser = asyncHandler(async (req, res) => {
  const { name, email, password, role, addresses } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    role,
    addresses: addresses || [],
  });

  if (user) {
    // Initialize empty cart
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      avatar: user.avatar,
      role: user.role,
      addresses: user.addresses,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// Delete user
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (user) {
    //  // Delete user's cart
    // await Cart.deleteOne({ userId: user._id });

    // // Delete user's orders (if any exist)
    // await Order.deleteMany({ userId: user._id });

    // Delete the user
    await user.deleteOne();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

export { getUsers, createUser, deleteUser };

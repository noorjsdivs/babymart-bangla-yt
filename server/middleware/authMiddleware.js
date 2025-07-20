import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// Protect routes
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];
      //   Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      //   Get user from token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch (error) {
      console.error("Bearer token error:", error);
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
// Admin Middleware

export { protect };

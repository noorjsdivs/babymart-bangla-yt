import asyncHandler from "express-async-handler";
const loginUser = (req, res) => {
  res.send("Login Controller is working");
};
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, role } = req.body;
  console.log(name, email, password, role);

  res.send("Register is working");
});

export { loginUser, registerUser };

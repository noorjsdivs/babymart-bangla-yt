import CommonLayout from "@/components/common/CommonLayout";
import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <CommonLayout>
      Login
      <Link to={"/"}>Back to Home</Link>
    </CommonLayout>
  );
};

export default Login;

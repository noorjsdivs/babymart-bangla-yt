import React from "react";
import Header from "./Header";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default CommonLayout;

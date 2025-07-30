import { Button } from "@/components/ui/button";
import useAuthStore from "@/store/useAuthStore";
import React from "react";

const DashboardPage = () => {
  const { logout } = useAuthStore();
  return (
    <div className="p-10">
      <Button variant={"destructive"} onClick={() => logout()}>
        Logout
      </Button>
    </div>
  );
};

export default DashboardPage;

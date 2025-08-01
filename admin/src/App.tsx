import { Navigate, Outlet } from "react-router";
import Sidebar from "./components/dashabord/Sidebar";
import Header from "./components/common/Header";
import { cn } from "./lib/utils";
import useAuthStore from "./store/useAuthStore";
import { useState } from "react";

function App() {
  const { isAuthenticated } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="h-screen flex bg-background">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />
      <div
        className={cn(
          "flex flex-col flex-1 max-w-[--breakpoint-2xl] hoverEffect",
          sidebarOpen ? "ml-64" : "ml-20"
        )}
      >
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;

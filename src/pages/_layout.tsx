import Header from "@/components/ui/Header";
import { Outlet } from "react-router-dom";

const _layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default _layout;

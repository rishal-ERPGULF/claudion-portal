import Header from "@/components/ui/Header";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

const _layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex">
        <div className="hidden w-20 md:flex justify-center">
          <div className="m-4">
            <Menu />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default _layout;

import Header from "@/components/ui/Header";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

const _layout = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <div className="flex">
        <aside className="hidden w-20 md:flex justify-center border-r bg-background">
          <div className="m-4">
            <Menu />
          </div>
        </aside>
        <Outlet />
      </div>
    </div>
  );
};

export default _layout;

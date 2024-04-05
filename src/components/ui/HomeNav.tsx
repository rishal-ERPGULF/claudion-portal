import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Bell,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Search,
  User,
  UsersRound,
} from "lucide-react";
import { useState } from "react";
const HomeNav = () => {
  const [createToggle, setCreateToggle] = useState<boolean>(false);

  return (
    <nav className="h-16 w-full border-b flex px-2 items-center gap-4">
      <DropdownMenu
        open={createToggle}
        onOpenChange={() => setCreateToggle(!createToggle)}
      >
        <DropdownMenuTrigger asChild>
          <Button size={"sm"} className="text-base font-semibold">
            create
            {createToggle ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="bottom" align="start">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex flex-1 w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 ">
        <form className="flex-1 sm:flex-initial w-full">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search for Claudions, Volumes, Domains ..."
              className="pl-8 placeholder:text-xs md:placeholder:text-sm"
            />
          </div>
        </form>
      </div>
      <div className="md:hidden flex">
        <Button
          variant="outline"
          size="icon"
          className="group"
          // onClick={() => setOpen(!open)}
        >
          <ChevronDown className="h-6 w-6 text-muted-foreground scale-90 transition-all duration-300 group-hover:scale-100 group-hover:text-foreground" />
        </Button>
      </div>
      <div className="hidden md:flex gap-4 items-center">
        <Button
          size={"icon"}
          variant={"ghost"}
          className=" text-muted-foreground transition-colors hover:text-foreground"
        >
          <HelpCircle className="h-6 w-6" />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          className=" text-muted-foreground transition-colors hover:text-foreground"
        >
          <UsersRound className="h-6 w-6" />
        </Button>
        <Button
          size={"icon"}
          variant={"ghost"}
          className=" text-muted-foreground transition-colors hover:text-foreground"
        >
          <Bell className="h-6 w-6" />
        </Button>
        <Button size={"icon"} variant={"outline"} className="w-fit gap-2 px-4">
          <User className="h-6 w-6" /> Name <ChevronDown className="h-4 w-4" />
        </Button>
      </div>
    </nav>
  );
};

export default HomeNav;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../theme-provider";

const Header = () => {
  const { setTheme, theme } = useTheme();

  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-20 ">
      <Link
        to={"/"}
        className="text-muted-foreground transition-colors hover:text-foreground mr-2"
      >
        <svg
          width="32"
          height="33"
          viewBox="0 0 32 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27.286 21.4801C27.4127 21.4073 27.5181 21.3024 27.5915 21.1761C27.6649 21.0497 27.7038 20.9062 27.7043 20.7601L27.7193 15.9376C27.7198 15.7914 27.7587 15.6479 27.8321 15.5216C27.9055 15.3952 28.0109 15.2903 28.1376 15.2176L30.7518 13.7159C30.8785 13.6431 31.0221 13.605 31.1682 13.6052C31.3143 13.6055 31.4578 13.6441 31.5842 13.7173C31.7107 13.7905 31.8157 13.8956 31.8887 14.0222C31.9617 14.1488 32.0001 14.2923 32.0001 14.4384V23.2059C32.0001 23.3525 31.9614 23.4965 31.888 23.6233C31.8145 23.7502 31.7089 23.8554 31.5818 23.9284L21.716 29.5951C21.59 29.6674 21.4472 29.7055 21.3019 29.7057C21.1566 29.7058 21.0138 29.668 20.8876 29.5959L13.1451 25.1676C13.0176 25.0947 12.9116 24.9894 12.8378 24.8624C12.7641 24.7354 12.7252 24.5911 12.7251 24.4442V20.0234C12.7251 20.0184 12.731 20.0151 12.736 20.0176C12.7401 20.0201 12.746 20.0176 12.746 20.0117V20.0067C12.746 20.0034 12.7476 20.0001 12.751 19.9984L19.1276 16.3351C19.1335 16.3317 19.131 16.3226 19.1243 16.3226C19.1225 16.3226 19.1208 16.3219 19.1196 16.3206C19.1183 16.3194 19.1176 16.3177 19.1176 16.3159L19.1301 11.9817C19.1307 11.8352 19.0926 11.691 19.0197 11.5639C18.9468 11.4368 18.8417 11.3311 18.7149 11.2576C18.5881 11.184 18.4442 11.1452 18.2976 11.1451C18.1511 11.1449 18.0071 11.1834 17.8801 11.2567L13.141 13.9876C13.0145 14.0604 12.8711 14.0987 12.7251 14.0987C12.5792 14.0987 12.4358 14.0604 12.3093 13.9876L7.55514 11.2501C7.42848 11.1771 7.28487 11.1388 7.13871 11.1389C6.99256 11.139 6.849 11.1775 6.72245 11.2507C6.59589 11.3238 6.49079 11.4289 6.41769 11.5554C6.34459 11.682 6.30607 11.8256 6.30598 11.9717V19.8051C6.30608 19.9511 6.26781 20.0945 6.19502 20.2211C6.12223 20.3477 6.01747 20.4529 5.89122 20.5262C5.76497 20.5995 5.62167 20.6384 5.47567 20.639C5.32967 20.6395 5.18609 20.6016 5.05931 20.5292L2.42098 19.0209C2.29319 18.9479 2.18701 18.8424 2.11323 18.715C2.03946 18.5877 2.00073 18.4431 2.00098 18.2959L2.02431 4.60423C2.02463 4.45826 2.06328 4.31494 2.13639 4.18861C2.20951 4.06228 2.31453 3.95737 2.44093 3.88438C2.56733 3.81139 2.71069 3.77288 2.85665 3.77271C3.00262 3.77253 3.14607 3.8107 3.27264 3.88339L12.3101 9.07423C12.4364 9.14675 12.5795 9.18491 12.7251 9.18491C12.8708 9.18491 13.0139 9.14675 13.1401 9.07423L22.1751 3.88339C22.3019 3.8106 22.4456 3.77242 22.5918 3.77271C22.7379 3.77299 22.8815 3.81172 23.0079 3.885C23.1344 3.95829 23.2394 4.06356 23.3123 4.19023C23.3853 4.31691 23.4236 4.46055 23.4235 4.60673V18.3017C23.4235 18.4482 23.385 18.5922 23.3117 18.719C23.2384 18.8458 23.1329 18.9511 23.006 19.0242L18.2743 21.7492C18.1472 21.8225 18.0417 21.928 17.9685 22.0551C17.8952 22.1822 17.8568 22.3264 17.8572 22.4731C17.8575 22.6198 17.8966 22.7638 17.9704 22.8906C18.0442 23.0173 18.1502 23.1224 18.2776 23.1951L20.8876 24.6809C21.0138 24.7527 21.1565 24.7903 21.3016 24.79C21.4468 24.7897 21.5893 24.7515 21.7151 24.6792L27.286 21.4801ZM27.8335 9.19506C27.8336 9.34243 27.8728 9.48714 27.9471 9.61442C28.0213 9.7417 28.1281 9.84701 28.2563 9.91961C28.3846 9.99221 28.5298 10.0295 28.6771 10.0277C28.8245 10.0258 28.9687 9.98497 29.0951 9.90922L31.5951 8.40922C31.7186 8.33527 31.8207 8.23063 31.8917 8.10548C31.9627 7.98033 32 7.83893 32.0001 7.69506V4.63839C31.9999 4.49109 31.9606 4.34649 31.8862 4.21932C31.8119 4.09216 31.7052 3.98697 31.577 3.91447C31.4487 3.84197 31.3036 3.80476 31.1563 3.80662C31.009 3.80848 30.8648 3.84935 30.7385 3.92506L28.2385 5.42506C28.1151 5.49901 28.0129 5.60365 27.9419 5.72881C27.871 5.85396 27.8336 5.99535 27.8335 6.13923V9.19506Z"
            fill="#007FFF"
          />
        </svg>
      </Link>
      <nav className="hidden gap-6 text-lg font-bold md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
        <Link
          to={"/"}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Products
        </Link>
        <Link
          to={"/"}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Docs
        </Link>
        <Link
          to={"/pricing"}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Pricing
        </Link>
        <Link
          to={"/"}
          className="text-muted-foreground transition-colors hover:text-foreground text-nowrap"
        >
          About us
        </Link>
        <Link
          to={"/"}
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          Blog
        </Link>
      </nav>

      <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form className="ml-auto flex-1 sm:flex-initial">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
            />
          </div>
        </form>
      </div>

      <div>
        <Button
          variant="outline"
          size="icon"
          className="group"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "light" ? (
            <Moon className="h-6 w-6 text-muted-foreground scale-90  transition-all duration-300 group-hover:scale-100 group-hover:text-foreground" />
          ) : (
            <Sun className="h-6 w-6 text-muted-foreground scale-90 transition-all duration-300 group-hover:scale-100 group-hover:text-foreground" />
          )}
        </Button>
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5 text-foreground" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <nav className="grid gap-6 text-lg font-medium">
            <Link
              to="/"
              className="text-muted-foreground hover:text-foreground"
            >
              Products
            </Link>
            <Link
              to={"/"}
              className="text-muted-foreground hover:text-foreground"
            >
              Docs
            </Link>
            <Link
              to={"/pricing"}
              className="text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              to={"/"}
              className="text-muted-foreground hover:text-foreground"
            >
              About us
            </Link>
            <Link
              to={"/"}
              className="text-muted-foreground hover:text-foreground"
            >
              Blog
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;

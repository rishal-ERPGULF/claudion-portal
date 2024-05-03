import HomeNav from "@/components/ui/HomeNav";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CircleCheck, FileText, Menu, Tags } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
      <HomeNav />
      <section className="flex p-3 md:p-6 flex-col gap-4">
        <div className="flex w-full items-center">
          <h1 className="text-2xl font-bold">Claudions</h1>
          <div className="ml-auto flex items-center gap-2 md:gap-4">
            <Button variant={"ghost"} className="gap-2">
              <FileText className="text-blue-600" /> Docs
            </Button>
            <Button size={"sm"} className="font-semibold">
              create claudion
            </Button>
          </div>
        </div>
        <Table>
          <TableCaption className="text-sm md:text-base">
            Monthly Network Transfer Pool{" "}
            <span className="text-blue-600 font-semibold">Usage</span>
          </TableCaption>
          <TableHeader className="dark:bg-black/40 bg-primary/10">
            <TableRow>
              <TableHead className="md:w-[100px]">Label</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="hidden md:table-cell">Plan</TableHead>
              <TableHead className="hidden md:table-cell">
                Public IP Address
              </TableHead>
              <TableHead className="hidden md:table-cell">Region</TableHead>
              <TableHead className="text-nowrap">Last Backup</TableHead>

              <TableHead className=" flex items-center gap-2 justify-center">
                <Menu />
                <Tags />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell
                className="font-medium text-blue-600 text-nowrap cursor-pointer"
                onClick={() => {
                  navigate("/claudions/1");
                }}
              >
                Bench Test
              </TableCell>
              <TableCell className="flex items-center gap-2">
                <CircleCheck
                  strokeWidth={"3px"}
                  className="w-4 h-4 text-green-600"
                />
                <span>
                  <span className="hidden md:inline">Running</span>
                </span>
              </TableCell>
              <TableCell className="hidden md:table-cell">Linode 2GB</TableCell>
              <TableCell className="hidden md:table-cell">$250.00</TableCell>
              <TableCell className="hidden md:table-cell">INV001</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell className="text-center">Credit Card</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="w-full text-right">
          <Button
            variant={"link"}
            className="text-sm md:text-base font-semibold"
          >
            Download CSV
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;

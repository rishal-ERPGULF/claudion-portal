import HomeNav from "@/components/ui/HomeNav";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { useParams } from "react-router-dom";

const BenchView = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40">
      <HomeNav />
      <div className="w-full flex flex-row justify-between px-3 items-center">
        <div className="text-base text-foreground/30">
          Claudion / <span className="text-foreground font-medium">{id}</span>
        </div>
        <div className="text-base text-blue-600">
          <Button variant={"ghost"} className="gap-2">
            <FileText /> Docs
          </Button>
        </div>
      </div>
      <div className="w-full px-2">
        <div className="w-full h-96 bg-background"></div>
      </div>
    </main>
  );
};

export default BenchView;

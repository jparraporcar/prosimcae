import Link from "next/link";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div
        className={cn([
          navigationMenuTriggerStyle(),
          "flex flex-col items-center justify-center text-base border-2 border-transparent hover:border-2 hover:bg-white hover:border-slate-300 py-6 pr-4",
        ])}
      >
        <div>
          <span className="font-bold text-center">Pro</span>SimLabs
        </div>
      </div>
    </Link>
  );
};

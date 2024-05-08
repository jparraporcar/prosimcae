import Link from "next/link";
import { navigationMenuTriggerStyle } from "../ui/navigation-menu";
import { cn } from "@/lib/utils";

export const Logo: React.FC = () => {
  return (
    <Link href="/">
      <div
        className={cn([
          navigationMenuTriggerStyle(),
          "flex flex-col items-center justify-center text-base border-2 border-transparent hover:border-2 hover:bg-white hover:border-slate-300 py-6 pr-4 pl-1",
        ])}
      >
        <div>
          <span className="font-bold text-base">&lt;Pro/&gt;</span>engine
        </div>
        <div className="flex flex-row items-center justify-center">
          <div className="border-t border-gray-400 w-5"></div>
          <span className="px-2 font-semibold text-sm">LABS</span>
          <div className="border-t border-gray-400 w-5"></div>
        </div>
      </div>
    </Link>
  );
};

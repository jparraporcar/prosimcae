"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export const NavigationMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = (id: string) => {
    setIsOpen(false);
    setTimeout(() => router.push(id), 400);
  };

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className="h-5">
        <Menu size={34} onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent>
        <div className="flex flex-col mt-8 ml-4 gap-y-6 text-xl">
          <Button
            onClick={() => handleClick("#main-section-title-services")}
            className="text-black group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium transition-colors hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50 border-transparent border-2 hover:border-2 hover:bg-slate-200 py-4 pr-4 active:bg-slate-300"
          >
            Services
          </Button>
          <Button
            onClick={() => handleClick("#main-section-title-technology")}
            className="text-black group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium transition-colors hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50 border-transparent border-2 hover:border-2 hover:bg-slate-200 py-4 pr-4 active:bg-slate-300"
          >
            Technology
          </Button>
          <Button
            onClick={() => handleClick("#main-section-title-study-cases")}
            className="text-black group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium transition-colors hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50 border-transparent border-2 hover:border-2 hover:bg-slate-200 py-4 pr-4 active:bg-slate-300"
          >
            Study Cases
          </Button>
          <Button
            onClick={() => handleClick("#main-section-title-collaborations")}
            className="text-black group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium transition-colors hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-100/50 data-[state=open]:bg-slate-100/50 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[active]:bg-slate-800/50 dark:data-[state=open]:bg-slate-800/50 border-transparent border-2 hover:border-2 hover:bg-slate-200 py-4 pr-4 active:bg-slate-300"
          >
            Collaborations
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

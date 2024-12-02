"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import "./navigation-mobile.css";

export const NavigationMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const handleClick = (id: string) => {
    setIsOpen((prevState) => !prevState);
    setTimeout(() => router.push(id), 400);
  };

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className="h-6">
        <Menu size={34} onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent
        onInteractOutside={() => setIsOpen(false)}
        className="ml-auto"
      >
        <div
          id="mobile-nav-container"
          className="flex flex-col -mt-2 -ml-2 gap-y-6 text-xl"
        >
          <div className="mr-auto ml-4 border-b-2">
            <Image
              src="/images/provisional-logo-prosimcae.jpg"
              alt="logo"
              width={200}
              height={15}
            />
          </div>
          <button
            onClick={() => handleClick("#main-section-title-services")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            Services
          </button>
          <button
            onClick={() => handleClick("#main-section-title-technology")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            Technology
          </button>
          <button
            onClick={() => handleClick("#main-section-title-study-cases")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            Study Cases
          </button>
          <button
            onClick={() => handleClick("#main-section-title-collaborations")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            Collaborations
          </button>
        </div>
        <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
          <X className="h-4 w-4" onClick={() => setIsOpen(false)} />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

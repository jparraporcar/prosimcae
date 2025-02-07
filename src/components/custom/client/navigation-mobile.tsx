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
import { Button } from "../../ui/button";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import logo from "@/images/provisional-logo-prosimcae.webp";
import "./navigation-mobile.css";
import Link from "next/link";
import { navButtonLabels } from "@/lib/content";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export const NavigationMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations();
  const locale = useLocale();

  const handleClick = (id: string) => {
    setIsOpen((prevState) => !prevState);
    if (pathname === "/" || pathname === "/en" || pathname === "/es") {
      // On the main page, scroll to the section
      setTimeout(() => {
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    } else {
      // Navigate to the main page and reset to the top
      console.log(router);
      router.replace(`/${locale}`);
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        const section = document.querySelector(id);
        if (section) {
          section.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 400);
    }
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
          <div
            className="mr-auto ml-4 border-b-2"
            role="button"
            onClick={() => setIsOpen((prevState) => !prevState)}
          >
            <Link href="/" passHref>
              <Image
                src={logo}
                alt="logo"
                width={200}
                height={15}
                placeholder="blur"
                priority
              />
            </Link>
          </div>
          <button
            onClick={() => handleClick("#main-section-title-services")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.simulationServices)}
          </button>
          <button
            onClick={() => handleClick("#main-section-title-technology")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.howWeWork)}
          </button>
          <button
            onClick={() => handleClick("#main-section-title-study-cases")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.caseStudies)}
          </button>
          <button
            onClick={() => handleClick("#main-section-title-blog")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.blog)}
          </button>
          <button
            onClick={() => handleClick("#main-section-title-collaborations")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.partnerWithUs)}
          </button>
          <button
            onClick={() => handleClick("#main-section-title-about-prosimcae")}
            className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
          >
            {t(navButtonLabels.aboutProsimcae)}
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

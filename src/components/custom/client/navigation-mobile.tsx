"use client";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/images/provisional-logo-prosimcae.webp";
import "./navigation-mobile.css";
import { navLinkLabels } from "@/lib/content";
import { useTranslations } from "next-intl";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Link } from "@/i18n/routing";

export const NavigationMobile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations();

  return (
    <Sheet open={isOpen}>
      <SheetTrigger className="h-6">
        <Menu size={34} onClick={() => setIsOpen(true)} />
      </SheetTrigger>
      <SheetContent
        onInteractOutside={() => setIsOpen(false)}
        className="ml-auto"
      >
        <VisuallyHidden asChild>
          <SheetTitle>Mobile navigation menu</SheetTitle>
        </VisuallyHidden>
        <VisuallyHidden asChild>
          <SheetDescription>
            Use this menu to navigate through the main sections of the website.
            Press the dark area outside the element to close.
          </SheetDescription>
        </VisuallyHidden>
        <nav id="nav-container-mobile">
          <ul className="list-none flex flex-col -mt-2 -ml-2 gap-y-6 text-xl">
            <li
              className="mr-auto ml-4 border-b-2 "
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
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-services"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.simulationServices)}
              </Link>
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-technology"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.howWeWork)}
              </Link>
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-study-cases"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.caseStudies)}
              </Link>
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-blog"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.blog)}
              </Link>
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-collaborations"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.partnerWithUs)}
              </Link>
            </li>
            <li
              role="button"
              onClick={() => setIsOpen((prevState) => !prevState)}
            >
              <Link
                href="/#main-section-title-about-prosimcae"
                className="text-black bg-white inline-flex border-white h-10 w-max items-center justify-center rounded-md bg-transparent px-4 text-lg font-medium py-4 pr-4 active:bg-slate-300 active:border-white focus:outline-none focus:border-white -webkit-appearance-none"
              >
                {t(navLinkLabels.aboutProsimcae)}
              </Link>
            </li>
          </ul>
        </nav>
        <SheetClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800">
          <X className="h-4 w-4" onClick={() => setIsOpen(false)} />
          <span className="sr-only">Close</span>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
};

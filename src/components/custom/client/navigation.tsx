import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/images/provisional-logo-prosimcae.webp";
import { navLinkLabels } from "@/lib/content";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";

export function Navigation() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <div className="fixed rounded-lg shadow-xl p-1 bg-white mt-4 align-middle">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem id="navitemtest" className="-mt-1 mr-4">
            <Link href="/">
              <div className="mr-auto ml-4">
                <Image
                  src={logo}
                  alt="logo"
                  width={150}
                  height={15}
                  placeholder="blur"
                  priority
                />
              </div>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link
              href="/#main-section-title-services"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.simulationServices)}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-technology"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.howWeWork)}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-study-cases"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.caseStudies)}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-blog"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.blog)}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-collaborations"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.partnerWithUs)}
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-about-prosimcae"
              className={cn([
                navigationMenuTriggerStyle(),
                "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
              ])}
            >
              {t(navLinkLabels.aboutProsimcae)}
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

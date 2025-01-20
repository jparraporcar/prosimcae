"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from "@/images/provisional-logo-prosimcae.webp";

export function Navigation() {
  return (
    <div className="fixed rounded-lg shadow-xl p-1 bg-white mt-4 align-middle">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem id="navitemtest" className="-mt-1 mr-4">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink>
                <div className="mr-auto ml-4">
                  <Image
                    src={logo}
                    alt="logo"
                    width={150}
                    height={15}
                    placeholder="blur"
                  />
                </div>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="/#main-section-title-services" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Simulation services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-technology"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                How we work
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-study-cases"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Case studies
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-collaborations"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Partner with us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link
              href="/#main-section-title-about-prosimcae"
              legacyBehavior
              passHref
            >
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                About prosimcae
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

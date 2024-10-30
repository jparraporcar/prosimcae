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

export function Navigation() {
  return (
    <div className="fixed flex rounded-lg shadow-xl p-1 bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem id="navitemtest">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                <span className="font-bold text-center bg-transparent">
                  Pro
                </span>
                EngineLabs
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Technology
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Study Cases
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-transparent border-2 hover:border-2 hover:bg-slate-200 active:bg-slate-300 py-4 pr-4",
                ])}
              >
                Collaborations
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

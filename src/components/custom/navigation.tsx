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
import { ItemsList } from "./items-list";
import Image from "next/image";
import { Logo } from "./logo";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { GiWorld } from "react-icons/gi";

export function Navigation() {
  return (
    <div className="fixed flex rounded-lg border-slate-400 shadow-xl p-1 bg-slate-200">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Logo />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="#study-cases" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-2 border-transparent hover:border-2 hover:bg-white hover:border-slate-300 py-6 pr-4",
                ])}
              >
                Services
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contactus" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 py-6 pr-4 pl-3",
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
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 py-6 pr-4 pl-3",
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
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 py-6 pr-4 pl-3",
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

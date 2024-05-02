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

export function Navigation() {
  return (
    <div className="fixed flex rounded-lg border-slate-400 shadow-xl p-1 bg-slate-100 h-16">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Logo />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="/cae" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 py-6 pr-4 pl-1",
                ])}
              >
                <Image
                  src="/images/cae-icon.webp"
                  width={30}
                  height={30}
                  alt="cae icon text"
                  className="mx-1"
                />
                CAE Analisys
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="/dev" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 py-6 pr-4 pl-1",
                ])}
              >
                <Image
                  src="/images/dev.webp"
                  width={45}
                  height={45}
                  alt="cae icon text"
                  className=""
                />
                Software Development
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contactus" legacyBehavior passHref>
              <NavigationMenuLink
                className={cn([
                  navigationMenuTriggerStyle(),
                  "border-2 border-transparent hover:border-2 hover:border-slate-300 p-6",
                ])}
              >
                Contact us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

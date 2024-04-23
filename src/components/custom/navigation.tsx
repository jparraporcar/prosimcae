"use client";

import * as React from "react";
import Link from "next/link";
import { Icon } from "./icon";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function Navigation() {
  return (
    <div className="fixed flex rounded-lg border-slate-400 shadow-xl p-1 bg-slate-100 h-16">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem className="flex">
            <NavigationMenuTrigger
              onPointerLeave={(event) => {
                event.preventDefault();
              }}
              onPointerEnter={(event) => {
                event.preventDefault();
              }}
              onPointerMove={(event) => {
                event.preventDefault();
              }}
              className="border-2 border-transparent hover:border-2 hover:border-slate-300 p-6"
            >
              <Icon
                src="/images/cae-icon.webp"
                width={30}
                height={30}
                alt="cae icon text"
                className=""
              />
              CAE Analisys
            </NavigationMenuTrigger>
            <NavigationMenuContent
              onPointerLeave={(event) => {
                event.preventDefault();
              }}
              onPointerEnter={(event) => {
                event.preventDefault();
              }}
              className="left-auto"
            >
              <NavigationMenuList className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <NavigationMenuTrigger
              onPointerLeave={(event) => {
                event.preventDefault();
              }}
              onPointerEnter={(event) => {
                event.preventDefault();
              }}
              onPointerMove={(event) => {
                event.preventDefault();
              }}
              className="border-2 border-transparent hover:border-2 hover:border-slate-300 p-6"
            >
              <Icon
                src="/images/dev.webp"
                width={45}
                height={45}
                alt="cae icon text"
                className=""
              />
              Software Development
            </NavigationMenuTrigger>
            <NavigationMenuContent
              onPointerLeave={(event) => {
                event.preventDefault();
              }}
              onPointerEnter={(event) => {
                event.preventDefault();
              }}
            >
              <NavigationMenuList className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px] ">
                <ListItem href="/docs" title="Introduction">
                  Re-usable components built using Radix UI and Tailwind CSS.
                </ListItem>
                <ListItem href="/docs/installation" title="Installation">
                  How to install dependencies and structure your app.
                </ListItem>
                <ListItem href="/docs/primitives/typography" title="Typography">
                  Styles for headings, paragraphs, lists...etc
                </ListItem>
              </NavigationMenuList>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink
                className={`py-6 ${navigationMenuTriggerStyle()} border-2 border-transparent hover:border-2 hover:border-slate-300 p-6`}
              >
                Contact
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

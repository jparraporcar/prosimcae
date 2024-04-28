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

export function Navigation() {
  return (
    <div className="fixed flex rounded-lg border-slate-400 shadow-xl p-1 bg-slate-100 h-16">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Logo />
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <NavigationMenuTrigger
              // onPointerLeave={(event) => event.preventDefault()}
              // onPointerEnter={(event) => event.preventDefault()}
              // onPointerMove={(event) => event.preventDefault()}
              className="border-2 border-transparent hover:border-2 hover:border-slate-300 p-6"
            >
              <Image
                src="/images/cae-icon.webp"
                width={30}
                height={30}
                alt="cae icon text"
                className="mx-1"
              />
              CAE Analisys
            </NavigationMenuTrigger>
            <NavigationMenuContent
              // onPointerLeave={(event) => event.preventDefault()}
              // onPointerEnter={(event) => event.preventDefault()}
              className="left-auto"
            >
              <ul className="grid lg:justify-items-center lg:items-start w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[500px]">
                <li className="mx-0">
                  <ItemsList
                    title="Physics"
                    items={[
                      {
                        name: "Computer Fluid Dynamics",
                        href: "/physics/#fluid",
                      },
                      {
                        name: "Solid mechanics (FEM)",
                        href: "/physics/#solid",
                      },
                      {
                        name: "Thermal analysis",
                        href: "/physics/#thermal",
                      },
                    ]}
                  />
                </li>
                <li className="mx-0">
                  <ItemsList
                    title="Applications"
                    items={[
                      { name: "Static", href: "/applications/static" },
                      { name: "Dynamics", href: "/applications/dynamics" },
                      {
                        name: "Heat transfer",
                        href: "applications/heattransfer",
                      },
                      { name: "Modal", href: "/applications/modal" },
                      {
                        name: "Thermo-mechanical",
                        href: "/applications/thermomechanical",
                      },
                    ]}
                  />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem className="flex">
            <NavigationMenuTrigger
              // onPointerLeave={(event) => event.preventDefault()}
              // onPointerEnter={(event) => event.preventDefault()}
              // onPointerMove={(event) => event.preventDefault()}
              className="border-2 border-transparent hover:border-2 hover:border-slate-300 p-6"
            >
              <Image
                src="/images/dev.webp"
                width={45}
                height={45}
                alt="cae icon text"
                className=""
              />
              Software Development
            </NavigationMenuTrigger>
            <NavigationMenuContent
            // onPointerLeave={(event) => event.preventDefault()}
            // onPointerEnter={(event) => event.preventDefault()}
            >
              <ul className="grid lg:justify-items-center lg:items-start w-[400px] gap-3 p-4 md:w-[300px] md:grid-cols-2 lg:w-[500px]">
                <li className="mx-0">
                  <ItemsList
                    title="Web development"
                    items={[
                      {
                        name: "Single page application",
                        href: "/dev/#web",
                      },
                      {
                        name: "Server side rendering",
                        href: "/dev/#ssr",
                      },
                      {
                        name: "Rest API development",
                        href: "/dev/#rest",
                      },
                      {
                        name: "Cloud deployment",
                        href: "/dev/#rest",
                      },
                    ]}
                  />
                </li>
                <li className="mx-0">
                  <ItemsList
                    title="Cross-platform app"
                    items={[
                      { name: "Android", href: "/crossplatform/#android" },
                      { name: "IOS", href: "/crossplatform/#ios" },
                      {
                        name: "Progressive web app",
                        href: "/crossplatform/#ios",
                      },
                      {
                        name: "Native API integration",
                        href: "/crossplatform/#nativeapi",
                      },
                    ]}
                  />
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

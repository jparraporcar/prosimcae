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
              <ul className="grid lg:justify-items-center lg:items-start w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px]">
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
                <li className="mx-0">
                  <ItemsList
                    title="Industry"
                    items={[
                      { name: "Automotive", href: "/industry/automotive" },
                      { name: "Electronics", href: "/industry/electronics" },
                      { name: "Energy", href: "/energy/energy" },
                      {
                        name: "Manufacturing",
                        href: "/industry/manufacturing",
                      },
                      {
                        name: "Industrial equipment",
                        href: "/industry/industrialequipment",
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
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[800px] "></ul>
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

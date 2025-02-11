import Image from "next/image";
import { Navigation } from "./client/navigation";
import { NavigationMobile } from "./client/navigation-mobile";
import "./navigation-wrapper.css";
import logo from "@/images/provisional-logo-prosimcae.webp";
import Link from "next/link";

export const NavigationWrapper: React.FC = () => {
  return (
    <>
      <div className="max-md:hidden flex flex-row justify-center">
        <Navigation />
      </div>
      <div
        id="menu-trigger"
        className="flex flex-row justify-end w-full xl:hidden bg-white fixed m-0 p-2 border-b-2"
      >
        <div className="mr-auto ml-4">
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
        <div style={{ placeContent: "center", marginTop: "4px" }}>
          <NavigationMobile />
        </div>
      </div>
    </>
  );
};

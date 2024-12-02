import Image from "next/image";
import { Navigation } from "./client/navigation";
import { NavigationMobile } from "./navigation-mobile";
import "./navigation-wrapper.css";

export const NavigationWrapper: React.FC = () => {
  return (
    <>
      <div className="max-md:hidden flex flex-row justify-center">
        <Navigation />
      </div>
      <div
        id="menu-trigger"
        className="flex flex-row justify-end w-full md:hidden bg-white fixed m-0 p-2 border-b-2"
      >
        <div className="mr-auto ml-4">
          <Image
            src="/images/provisional-logo-prosimcae.jpg"
            alt="logo"
            width={200}
            height={15}
          />
        </div>
        <div style={{ placeContent: "center", marginTop: "0px" }}>
          <NavigationMobile />
        </div>
      </div>
    </>
  );
};

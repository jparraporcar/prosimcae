import { Navigation } from "./client/navigation";
import { NavigationMobile } from "./navigation-mobile";
import "./navigation-wrapper.css";

export const NavigationWrapper: React.FC = () => {
  return (
    <>
      <div className="max-md:hidden flex flex-row justify-center">
        <Navigation />
      </div>
      <div id="menu-trigger" className="md:hidden">
        <NavigationMobile />
      </div>
    </>
  );
};

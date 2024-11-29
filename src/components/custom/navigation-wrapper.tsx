import { Navigation } from "./client/navigation";
import { NavigationMobile } from "./navigation-mobile";
import "./navigation-wrapper.css";

export const NavigationWrapper: React.FC = () => {
  return (
    <>
      <Navigation />
      <div id="menu-trigger" className="block md:hidden">
        <NavigationMobile />
      </div>
    </>
  );
};

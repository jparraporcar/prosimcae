import { Navigation } from "./client/navigation";
import { NavigationMobile } from "./navigation-mobile";

export const NavigationWrapper: React.FC = () => {
  return (
    <>
      <Navigation />
      <div className="block md:hidden">
        <NavigationMobile />
      </div>
    </>
  );
};

import { Navigation } from "./navigation";
import { NavigationMobile } from "./navigation-mobile";

export const NavigationWrapper: React.FC = () => {
  return (
    <div>
      {/* Desktop navigation - Hidden on mobile */}
      <div className="hidden md:block">
        <Navigation />
      </div>

      {/* Mobile navigation - Hidden on desktop */}
      <div className="block md:hidden">
        <NavigationMobile />
      </div>
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import { NavigationMobile } from "./navigation-mobile";
import { Navigation } from "./navigation";

export const NavigationWrapper: React.FC = () => {
  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const setScreenClass = () => {
      const width = window.innerWidth;
      if (width < 767) {
        setScreenSize("max-md");
      } else if (width >= 767 && width < 1279) {
        setScreenSize("max-xl");
      }
    };
    setScreenClass();
  }, []);

  return <>{screenSize === "max-md" ? <NavigationMobile /> : <Navigation />}</>;
};

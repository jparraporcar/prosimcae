"use client";

import { useEffect, useState } from "react";
import { NavigationMobile } from "./navigation-mobile";
import { Navigation } from "./navigation";

export const NavigationWrapper: React.FC = () => {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 767);
    };

    // Run on initial mount
    handleResize();

    // Add event listener for resizing
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile === null) {
    console.log(isMobile);
    // Render nothing or a placeholder during the initial load
    return null;
  }

  return isMobile ? <NavigationMobile /> : <Navigation />;
};

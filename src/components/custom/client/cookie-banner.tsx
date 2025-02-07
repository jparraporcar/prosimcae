"use client";

import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CookieBanner = () => {
  const [cookies, setCookie] = useCookies(["analyticsConsent"]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner only if the consent cookie is not already set
    if (cookies.analyticsConsent === undefined) {
      setIsVisible(true);
    }
  }, [cookies.analyticsConsent]);

  const handleAccept = () => {
    setCookie("analyticsConsent", true, { path: "/" });
    setIsVisible(false); // Hide the banner
  };

  const handleDecline = () => {
    setCookie("analyticsConsent", false, { path: "/" });
    setIsVisible(false); // Hide the banner
  };

  if (!isVisible) return null; // Don't render the banner if not visible

  return (
    <div className="fixed flex flex-row justify-center bottom-4 left-4 right-4 z-50 md:bottom-8 md:left-8 md:right-8">
      <Card className="border border-gray-300 shadow-lg bg-gray-50 text-gray-800 max-md:w-9/12 w-6/12">
        <CardHeader className="flex flex-row justify-center p-2">
          <CardTitle className="text-base md:text-lg font-semibold">
            Cookies Notice
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm max-md:text-[10px]">
            We use cookies to improve your experience. Do you accept analytics
            cookies?
          </CardDescription>
          <div className="mt-4 flex flex-col md:flex-row md:justify-end md:gap-4 gap-2">
            <Button
              onClick={handleDecline}
              variant="outline"
              className="text-gray-800 border-gray-400 hover:bg-gray-100 w-full md:w-auto"
            >
              Decline
            </Button>
            <Button
              onClick={handleAccept}
              className="bg-gray-800 text-white hover:bg-gray-900 w-full md:w-auto"
            >
              Accept
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CookieBanner;

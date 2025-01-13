"use client";

import Script from "next/script";
import { useCookies } from "react-cookie";

export const AnalyticsProvider = () => {
  const [cookies] = useCookies(["analyticsConsent"]);

  return (
    <>
      {cookies.analyticsConsent && (
        <>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CKC5FPSJWE"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CKC5FPSJWE');
            `}
          </Script>
        </>
      )}
    </>
  );
};

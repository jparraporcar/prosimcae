"use client";

import Script from "next/script";
import { useCookies } from "react-cookie";

export const AnalyticsProvider = () => {
  const [cookies] = useCookies(["analyticsConsent"]);

  return (
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
      <Script id="clarity-script" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "qw79yp8ekc");
        `}
      </Script>
    </>
  );
};

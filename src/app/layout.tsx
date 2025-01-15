import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/custom/client/navigation";
import { Button } from "@/components/ui/button";
import { NavigationWrapper } from "@/components/custom/navigation-wrapper";
import Head from "next/head";
import Script from "next/script";
import { useCookies } from "react-cookie";
import CookieBanner from "@/components/custom/client/cookie-banner";
import { AnalyticsProvider } from "@/components/custom/client/analytics-provider";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-0">
      <Head>
        {/* Basic Metadata */}
        <title>Prosimcae - Engineering and Simulation Services</title>
        <meta
          name="description"
          content="Prosimcae provides high-quality engineering simulations and services, specializing in computational fluid dynamics and solid mechanics."
        />
        <meta name="robots" content="index, follow" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.prosimcae.com/" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Logo Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: "https://www.prosimcae.com/",
            logo: "https://www.prosimcae.com/logo.webp",
          })}
        </script>

        {/* Website Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://www.prosimcae.com/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://www.prosimcae.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Head>
      <CookieBanner />
      <AnalyticsProvider />
      <body className={inter.className}>
        <div className="w-full flex flex-row max-md:justify-end justify-center relative z-10">
          <NavigationWrapper />
        </div>
        {children}
        <section className="w-full">
          <Footer />
        </section>
      </body>
    </html>
  );
}

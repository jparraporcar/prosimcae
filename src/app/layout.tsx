import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationWrapper } from "@/components/custom/navigation-wrapper";
import CookieBanner from "@/components/custom/client/cookie-banner";
import { AnalyticsProvider } from "@/components/custom/client/analytics-provider";
import Footer from "@/components/custom/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosimcae - Engineering and Simulation Services",
  description:
    "Prosimcae provides high-quality engineering simulations and services, specializing in computational fluid dynamics and solid mechanics.",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://www.prosimcae.com/",
  },
  other: {
    "script:ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        url: "https://www.prosimcae.com/",
        logo: "https://www.prosimcae.com/logo.webp",
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url: "https://www.prosimcae.com/",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://www.prosimcae.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
    ]),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="mx-0">
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

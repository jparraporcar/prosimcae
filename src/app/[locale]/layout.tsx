import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationWrapper } from "@/components/custom/navigation-wrapper";
import CookieBanner from "@/components/custom/client/cookie-banner";
import { AnalyticsProvider } from "@/components/custom/client/analytics-provider";
import Footer from "@/components/custom/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import { Metadata } from "next";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  // Enable static rendering
  const t = await getTranslations({ locale });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: t("metadata.alternates.canonical"),
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} className="mx-0">
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <CookieBanner />
          <AnalyticsProvider />
          <SpeedInsights />
          <Analytics />
          <div className="w-full flex flex-row max-md:justify-end justify-center relative z-10">
            <NavigationWrapper />
          </div>
          {children}
          <section className="w-full">
            <Footer />
          </section>
          <Toaster />
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

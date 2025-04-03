import { Inter } from "next/font/google";
import "./globals.css";
import { NavigationWrapper } from "@/components/custom/navigation-wrapper";
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
import FloatingButton from "@/components/custom/client/floating-button";
import { setRequestLocale } from "next-intl/server";
import { WebVitals } from "@/components/custom/client/web-vitals";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: any;
}): Promise<Metadata> {
  const { locale } = await params;
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
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} className="mx-0">
      <NextIntlClientProvider messages={messages}>
        <body className={inter.className}>
          <FloatingButton />
          <AnalyticsProvider />
          <SpeedInsights />
          <Analytics />
          <WebVitals />
          <header className="w-full flex flex-row max-md:justify-end justify-center relative z-10">
            <NavigationWrapper />
          </header>
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

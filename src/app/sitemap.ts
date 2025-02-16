import { MetadataRoute } from "next";
import { host } from "@/config";
import { Locale, getPathname, routing } from "@/i18n/routing";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    getEntry("/"),
    getEntry("/privacy-policy"),
    getEntry("/legal-notice"),
    getEntry("/privacy-policy"),
    getEntry("/terms-of-service"),
    getEntry("/blog-entries/what-is-the-finite-element-method-fem"),
    getEntry(
      "/blog-entries/failure-analysis-and-breakage-in-parts-how-to-avoid-costly-design-errors"
    ),
    getEntry(
      "/blog-entries/custom-engineering-workflow-from-cad-to-optimized-design"
    ),
  ];
}

type Href = Parameters<typeof getPathname>[0]["href"];

function getEntry(href: Href) {
  const isRoot = href === "/";

  return {
    url: getUrl(href, routing.defaultLocale),
    alternates: {
      canonical: isRoot
        ? "https://www.prosimcae.com/"
        : getUrl(href, routing.defaultLocale),
      languages: Object.fromEntries(
        routing.locales.map((locale) => [locale, getUrl(href, locale)])
      ),
    },
  };
}

function getUrl(href: Href, locale: Locale) {
  const pathname = getPathname({ locale, href });
  return host + pathname;
}

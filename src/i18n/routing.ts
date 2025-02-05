import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "es",
  localeDetection: false,
  pathnames: {
    "/": {
      en: "/en",
      es: "/",
    },
    "/cookie-policy": {
      en: "/en/cookie-policy",
      es: "/politica-de-cookies",
    },
    "/legal-notice": {
      en: "/en/legal-notice",
      es: "/aviso-legal",
    },
    "/privacy-policy": {
      en: "/en/privacy-policy",
      es: "/politica-de-privacidad",
    },
    "/terms-of-service": {
      en: "/en/terms-of-service",
      es: "/terminos-del-servicio",
    },
    "/blog-entries/what-is-the-finite-element-method-fem": {
      en: "/en/blog-entries/what-is-the-finite-element-method-fem",
      es: "/entradas-del-blog/que-es-el-metodo-de-los-elementos-finitos-fem",
    },
    "/#main-section-title-services": {
      en: "/en#main-section-title-services",
      es: "/#main-section-title-services",
    },
    "/#main-section-title-technology": {
      en: "/en#main-section-title-technology",
      es: "/#main-section-title-technology",
    },
    "/#main-section-title-study-cases": {
      en: "/en#main-section-title-study-cases",
      es: "/#main-section-title-study-cases",
    },
    "/#main-section-title-blog": {
      en: "/en#main-section-title-blog",
      es: "/#main-section-title-blog",
    },
    "/#main-section-title-collaborations": {
      en: "/en#main-section-title-collaborations",
      es: "/#main-section-title-collaborations",
    },
    "/#main-section-title-about-prosimcae": {
      en: "/en#main-section-title-about-prosimcae",
      es: "/#main-section-title-about-prosimcae",
    },
  },
});
export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

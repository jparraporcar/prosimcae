import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "es",
  localeDetection: false,
  pathnames: {
    "/": "/",
    "/cookie-policy": {
      en: "/cookie-policy",
      es: "/politica-de-cookies",
    },
    "/legal-notice": {
      en: "/legal-notice",
      es: "/aviso-legal",
    },
    "/privacy-policy": {
      en: "/privacy-policy",
      es: "/politica-de-privacidad",
    },
    "/terms-of-service": {
      en: "/terms-of-service",
      es: "/terminos-del-servicio",
    },
  },
});
export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

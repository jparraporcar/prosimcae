import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "es",
  localeDetection: false,
  localePrefix: "as-needed",
  pathnames: {
    "/": {
      en: "/",
      es: "/",
    },
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
    "/blog-entries/what-is-the-finite-element-method-fem": {
      en: "/blog-entries/what-is-the-finite-element-method-fem",
      es: "/entradas-del-blog/que-es-el-metodo-de-los-elementos-finitos-fem",
    },
    "/blog-entries/failure-analysis-and-breakage-in-parts-how-to-avoid-costly-design-errors":
      {
        en: "/blog-entries/failure-analysis-and-breakage-in-parts-how-to-avoid-costly-design-errors",
        es: "/entradas-del-blog/analisis-de-rotura-y-fallos-en-piezas-como-evitar-caros-errores-de-diseno",
      },
    "/blog-entries/custom-engineering-workflow-from-cad-to-optimized-design": {
      en: "/blog-entries/custom-engineering-workflow-from-cad-to-optimized-design",
      es: "/entradas-del-blog/flujo-de-trabajo-de-ingenieria-por-proyecto-del-cad-al-diseno-optimizado",
    },
    "/#main-section-title-services": {
      en: "/#main-section-title-services",
      es: "/#main-section-title-services",
    },
    "/#main-section-title-technology": {
      en: "/#main-section-title-technology",
      es: "/#main-section-title-technology",
    },
    "/#main-section-title-study-cases": {
      en: "/#main-section-title-study-cases",
      es: "/#main-section-title-study-cases",
    },
    "/#main-section-title-blog": {
      en: "/#main-section-title-blog",
      es: "/#main-section-title-blog",
    },
    "/#main-section-title-collaborations": {
      en: "/#main-section-title-collaborations",
      es: "/#main-section-title-collaborations",
    },
    "/#main-section-title-about-prosimcae": {
      en: "/#main-section-title-about-prosimcae",
      es: "/#main-section-title-about-prosimcae",
    },
  },
});
export type Locale = (typeof routing.locales)[number];
export type Pathnames = keyof typeof routing.pathnames;

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

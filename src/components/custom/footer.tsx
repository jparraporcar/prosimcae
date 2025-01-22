import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const XLogo = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" height="24" width="24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-600 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4 md:mb-0">
            <Link
              href={`/${locale}/privacy-policy`}
              className="hover:text-white transition-colors"
            >
              {t("links.privacyPolicy")}
            </Link>
            <Link
              href={`/${locale}/cookie-policy`}
              className="hover:text-white transition-colors"
            >
              {t("links.cookiePolicy")}
            </Link>
            <Link
              href={`/${locale}/terms-of-service`}
              className="hover:text-white transition-colors"
            >
              {t("links.termsOfService")}
            </Link>
            <Link
              href={`/${locale}/legal-notice`}
              className="hover:text-white transition-colors"
            >
              {t("links.legalNotice")}
            </Link>
            <a
              href="mailto:info@prosimcae.com"
              className="hover:text-white transition-colors"
            >
              {t("links.contactUs")}
            </a>
          </nav>
          <div className="flex gap-4 items-center">
            <p className="max-md:text-xs">{t("copyRight")}</p>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <XLogo />
              <span className="sr-only">{t("social.x")}</span>
            </a>
            <a
              href="https://www.linkedin.com/in/jordiparraporcar/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={24} />
              <span className="sr-only">{t("social.linkedin")}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

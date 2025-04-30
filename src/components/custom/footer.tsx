import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const t = useTranslations("footer");
  const locale = useLocale();

  return (
    <footer className="bg-gray-600 text-gray-300">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <nav>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-4 mb-4 md:mb-0">
              <li>
                <Link
                  href={`/${locale}/privacy-policy`}
                  className="hover:text-white transition-colors"
                >
                  {t("links.privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/cookie-policy`}
                  className="hover:text-white transition-colors"
                >
                  {t("links.cookiePolicy")}
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/terms-of-service`}
                  className="hover:text-white transition-colors"
                >
                  {t("links.termsOfService")}
                </Link>
              </li>

              <li>
                <Link
                  href={`/${locale}/legal-notice`}
                  className="hover:text-white transition-colors"
                >
                  {t("links.legalNotice")}
                </Link>
              </li>
              <a
                href="mailto:info@prosimcae.com"
                className="hover:text-white transition-colors"
              >
                {t("links.contactUs")}
              </a>
            </ul>
          </nav>
          <div className="flex gap-4 items-center">
            <p className="max-md:text-xs">{t("copyRight")}</p>
            <a
              href="https://www.instagram.com/prosimcae/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

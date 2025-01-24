"use client";

import type React from "react";
import Link from "next/link";
import { useLocale } from "next-intl";

const FloatingButton: React.FC = () => {
  const locale = useLocale();

  // Determine the opposite locale
  const oppositeLocale = locale === "en" ? "es" : "en";

  // Determine the link text based on the current locale
  const linkText = locale === "en" ? "Español" : "English";

  // Use relative paths to prevent path accumulation
  const href = `/${oppositeLocale}`;

  return (
    <Link
      href={href}
      aria-label={`Switch to ${linkText}`}
      className="
        fixed 
        /* Top Position */
        top-[13px]          /* Base: 13px for small screens */
        md:top-[70px]       /* From md (768px) and up: 26px */
        xl:top-[13px]       /* From xl (1280px) and up: revert to 13px */

        /* Right Position */
        right-14            /* Base: 56px for small screens */
        md:right-6          /* From md (768px) and up: 24px */
        xl:right-14         /* From xl (1280px) and up: revert to 56px */

        /* Size */
        w-9 h-9            /* Base: 36px */
        md:w-14 md:h-14    /* From md (768px) and up: 56px */
        xl:w-12 xl:h-12       /* From xl (1280px) and up: revert to 36px */

        /* Padding */
        p-6                /* Base: 24px */
        md:p-7              /* From md (768px) and up: 28px */
        xl:p-7              /* From xl (1280px) and up: revert to 24px */

        /* Text Size */
        text-[11px]             /* Base: 12px */
        md:text-sm           /* From md (768px) and up: 14px */
        xl:text-xs           /* From xl (1280px) and up: revert to 12px */

        /* Appearance */
        rounded-full 
        bg-white text-black 
        shadow-xl
        border
        active:border-2

        /* Interaction */
        hover:bg-slate-300 
        transition-all duration-300 

        /* Layout */
        flex justify-center items-center
        z-50
      "
    >
      {linkText}
    </Link>
  );
};

export default FloatingButton;

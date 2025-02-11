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
        max-md:top-[10px]
        max-xl:top-[8px]    
        top-[12px]   
        right-14            
        xl:right-6
        w-9 h-9           
        md:w-14 md:h-14    
        xl:w-12 xl:h-12      
        p-6                
        md:p-7              
        xl:p-7             
        text-[11px]          
        md:text-sm          
        xl:text-xs        
        rounded-full 
        bg-white text-black 
        shadow-xl
        border
        active:border-2
        flex justify-center items-center
        z-50
      "
    >
      {linkText}
    </Link>
  );
};

export default FloatingButton;

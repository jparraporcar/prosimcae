import React from "react";
import { useTranslations } from "next-intl";

interface PageIntroProps {
  descriptionText?: string;
  descriptionClass?: string;
}

export const MainSectionIntro: React.FC<PageIntroProps> = (props) => {
  const t = useTranslations();

  return (
    <div className="relative overflow-hidden w-[96%] max-md:w-11/12 bg-gradient-to-br from-slate-200 via-slate-300 to-slate-200 p-8 shadow-lg mt-14 max-md:mt-24 rounded-lg">
      <div className="absolute inset-0 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="fem-grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="black"
                strokeWidth="0.5"
              />
              <circle cx="0" cy="0" r="1" fill="black" />
              <circle cx="50" cy="0" r="1" fill="black" />
              <circle cx="0" cy="50" r="1" fill="black" />
              <circle cx="25" cy="25" r="1" fill="black" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#fem-grid)" />
        </svg>
      </div>

      {/* Main Text */}
      <h1
        id="main-section-intro"
        className="relative italic max-md:leading-[4px] text-2xl px-6 mb-2 space-y-4 text-center text-slate-600 max-md:text-base max-md:px-2 max-md:text-justify max-md:mx-1 md:space-y-6 max-lg:mx-0 max-md:mb-1"
        dangerouslySetInnerHTML={{ __html: t.raw(props.descriptionText) }}
      />
    </div>
  );
};

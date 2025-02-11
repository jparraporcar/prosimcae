import React from "react";
import { useTranslations } from "next-intl";

interface PageIntroProps {
  descriptionText?: string;
  descriptionClass?: string;
}

export const MainSectionIntro: React.FC<PageIntroProps> = (props) => {
  const t = useTranslations();

  return (
    <h1
      id="main-section-intro"
      className="appear-fading italic text-2xl px-10 mb-2 mt-14 pb-4 space-y-4 text-center text-slate-500 max-md:text-base max-md:px-2 max-md:text-justify max-md:mx-1 md:space-y-6 max-lg:mx-20 max-md:mb-1 max-md:mt-24"
    >
      {t(props.descriptionText)}
    </h1>
  );
};

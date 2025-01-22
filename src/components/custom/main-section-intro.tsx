import React from "react";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";

interface PageIntroProps {
  descriptionText?: string;
  descriptionContainerClass?: string;
  descriptionClass?: string;
}

export const MainSectionIntro: React.FC<PageIntroProps> = (props) => {
  const t = useTranslations();

  return (
    <div
      id="descriptionContainer"
      className={cn([
        "mx-28 max-md:mx-1 max-lg:mx-20 space-y-4 md:space-y-6",
        props.descriptionContainerClass,
      ])}
    >
      <p
        id="description"
        className={cn([
          "text-gray-500 dark:text-gray-400",
          props.descriptionClass,
        ])}
      >
        {t(props.descriptionText)}
      </p>
    </div>
  );
};

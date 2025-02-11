"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./study-cases-section.css";

import { StudyCase } from "./study-case";
import { mediaItem } from "@/lib/types";
import { useTranslations } from "next-intl";

interface StudyCase {
  studyCaseTitle: string;
  mediaItems: mediaItem[];
}

interface StudyCasesSectionProps {
  title: string;
  studyCases: StudyCase[];
  effectIsActive: boolean;
}

export const StudyCasesSection: React.FC<StudyCasesSectionProps> = (props) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const t = useTranslations();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.05,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn([
        `${props.effectIsActive && (isVisible ? "box visible" : "box hidden")}`,
        "flex flex-col w-8/12 max-lg:w-10/12 max-md:w-11/12 max-h-fit items-center",
      ])}
    >
      <h2 className="text-center text-2xl max-md:text-xl max-md:-mx-1 font-bold mb-4">
        {t(props.title)}
      </h2>
      {props.studyCases.map((studyCase, index) => (
        <div key={index} className="flex flex-col w-full mb-20 max-md:mb-14">
          <h1 className="text-center text-xl max-md:text-sm border-t border-l border-r p-2 rounded-tl-2xl rounded-tr-2xl border-slate-300 bg-slate-300">
            {t(studyCase.studyCaseTitle)}
          </h1>
          <div className="border rounded-bl-2xl rounded-br-2xl border-slate-300">
            <StudyCase mediaItems={studyCase.mediaItems} />
          </div>
        </div>
      ))}
    </div>
  );
};

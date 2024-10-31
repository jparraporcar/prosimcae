"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./study-cases-section.css";

import { StudyCase } from "../study-case";

interface StudyCase {
  studyCaseTitle: string;
  images: {
    title: string;
    description: string;
    alt: string;
    height: number;
    src: string;
    width: number;
    className?: string;
  }[];
}

interface StudyCasesSectionProps {
  title: string;
  studyCases: StudyCase[];
  effectIsActive: boolean;
}

export const StudyCasesSection: React.FC<StudyCasesSectionProps> = (props) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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
        "flex flex-col w-10/12 items-center",
      ])}
    >
      <h2 className="text-center text-3xl font-bold mb-8">{props.title}</h2>
      {props.studyCases.map((studyCase, index) => (
        <div key={index} className="flex flex-col w-11/12 mb-20">
          <h1 className="text-center border-t border-l border-r p-2 rounded-tl-2xl rounded-tr-2xl border-slate-300 bg-slate-300">
            {studyCase.studyCaseTitle}
          </h1>
          <div className="border rounded-bl-2xl rounded-br-2xl border-slate-300">
            <StudyCase images={studyCase.images} />
          </div>
        </div>
      ))}
    </div>
  );
};

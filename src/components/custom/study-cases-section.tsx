"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./study-cases-section.css";

import { StudyCase } from "./study-case";

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
    caption: string;
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
        "flex flex-col",
      ])}
    >
      <h2 className="text-center text-2xl font-bold tracking-tighter mb-6">
        {props.title}
      </h2>
      {props.studyCases.map((studyCase, index) => (
        <div key={index} className="flex flex-col mb-4">
          <h1 className="text-center">{studyCase.studyCaseTitle}</h1>
          <StudyCase images={studyCase.images} />
        </div>
      ))}
    </div>
  );
};

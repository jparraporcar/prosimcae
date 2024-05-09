"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "../page-section.css";

export interface DevPageSectionProps {
  section: {
    mainContainerClass?: string;
    imageContainerClass?: string;
    descriptionClass?: string;
    title: string;
    subSections: DevSubSection[];
    effectIsActive: boolean;
  };
}

type DevSubSection = {
  title: string;
  description: string;
  image: {
    alt: string;
    className?: string;
    height: number;
    src: string;
    width: number;
  };
};

export const DevPageSection: React.FC<DevPageSectionProps> = (props) => {
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
        `${props.section.effectIsActive && (isVisible ? "box visible" : "box hidden")}`,
        "flex flex-col gap-y-10",
        props.section.mainContainerClass,
      ])}
    >
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {props.section.title}
      </h2>
      <div className="flex flex-col items-start gap-y-14">
        {props.section.subSections.map((sub, index) => (
          <div
            key={index}
            className={cn([
              "flex flex-row gap-6",
              `${index % 2 !== 0 ? "justify-end" : ""}`,
            ])}
          >
            <Image
              alt={sub.image.alt}
              className={cn([
                "mx-auto aspect-video rounded-xl object-cover",
                sub.image.className,
                `${index % 2 === 0 ? "order-last" : ""}`,
              ])}
              height={sub.image.height}
              src={sub.image.src}
              width={sub.image.width}
            />
            <div className="flex flex-col w-8/12">
              <h3 className="text-lg font-semibold">{sub.title}</h3>
              <p
                className={cn([
                  "text-gray-500 dark:text-gray-400",
                  props.section.descriptionClass,
                ])}
              >
                {sub.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import "./section.css";

export interface CaePageSectionProps {
  images: {
    alt: string;
    className?: string;
    height: number;
    src: string;
    width: number;
    caption: string;
  }[];
  mainContainerClass?: string;
  imageContainerClass?: string;
  descriptionContainerClass?: string;
  title: string;
  subSections: CaeSubSection[];
  effectIsActive: boolean;
}

type CaeSubSection = {
  title: string;
  description: string;
};

export const StudyCases: React.FC<CaePageSectionProps> = (props) => {
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
        "grid gap-8 grid-cols-2 items-center",
        props.mainContainerClass,
      ])}
    >
      <div
        className={cn([
          "w-2/10 justify-self-center",
          props.imageContainerClass,
        ])}
      >
        {props.images.map((image, index) => (
          <figure key={index} className="flex flex-col items-center">
            <Image
              alt={image.alt}
              className={cn([
                "mx-auto aspect-video rounded-xl object-cover",
                image.className,
              ])}
              height={image.height}
              src={image.src}
              width={image.width}
            />
            <figcaption className="text-center text-gray-500 dark:text-gray-400">
              {image.caption}
            </figcaption>
          </figure>
        ))}
      </div>
      <div
        className={cn([
          "w-8/10 order-1 md:order-2 space-y-4 md:space-y-6",
          props.descriptionContainerClass,
        ])}
      >
        <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
          {props.title}
        </h2>
        <div className="grid gap-4 md:gap-6">
          {props.subSections.map((sub, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-lg font-semibold">{sub.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {sub.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

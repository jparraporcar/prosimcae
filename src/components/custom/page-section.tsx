import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface PageSectionProps {
  image: {
    alt: string;
    className?: string;
    height: number;
    src: string;
    width: number;
  };
  imageContainerClass?: string;
  title: string;
  subSections: SubSection[];
}

type SubSection = {
  title: string;
  description: string;
};

export const PageSection: React.FC<PageSectionProps> = (props) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 md:items-center ">
      <div className={cn(["w-2/10", props.imageContainerClass])}>
        <Image
          alt={props.image.alt}
          className={cn([
            "mx-auto aspect-video rounded-xl object-cover",
            props.image.className,
          ])}
          height={props.image.height}
          src={props.image.src}
          width={props.image.width}
        />
      </div>
      <div className="w-8/10 order-1 md:order-2 space-y-4 md:space-y-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
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

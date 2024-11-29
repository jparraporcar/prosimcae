"use client";

import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import dynamic from "next/dynamic";
import Image from "next/image";
import "./carousel-mobile.css";

interface RotatingImageCarouselProps {
  images: { src: string; alt: string; description: string }[];
}

export const CarouselMobile: React.FC<RotatingImageCarouselProps> = (props) => {
  return (
    <Carousel
      className="w-full max-w-sm"
      plugins={[
        Autoplay({
          delay: 2000,
        }) as any,
      ]}
    >
      <CarouselContent className="max-md:h-120">
        {props.images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="image-container-mobile">
              <Image
                src={image.src}
                alt={image.alt}
                width={150}
                height={150}
                className="image"
              />
              <p className="description-mobile">{image.description}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

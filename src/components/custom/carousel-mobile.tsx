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
import { useInView } from "react-intersection-observer";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface RotatingImageCarouselProps {
  images: {
    src: string;
    alt: string;
    description: string;
    width?: number;
    height?: number;
  }[];
}

export const CarouselMobile: React.FC<RotatingImageCarouselProps> = (props) => {
  const { ref: carouselRef, inView } = useInView({ threshold: 0.1 });
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!inView && !api?.plugins().autoplay.isPlaying()) {
      return;
    }
    if (!inView && api?.plugins().autoplay.isPlaying()) {
      api?.plugins().autoplay.stop();
    }
    if (inView && !api?.plugins().autoplay.isPlaying()) {
      api?.plugins().autoplay.play();
    }
  }, [api, inView]);

  return (
    <div ref={carouselRef}>
      <Carousel
        className="w-full max-w-sm"
        setApi={setApi}
        plugins={[
          Autoplay({
            delay: 2000,
            playOnInit: false,
          }) as any,
        ]}
      >
        <CarouselContent className="max-md:h-120">
          {props.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="image-container-mobile">
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  className="image"
                  loading="lazy"
                />
                <p className="description-mobile">{image.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

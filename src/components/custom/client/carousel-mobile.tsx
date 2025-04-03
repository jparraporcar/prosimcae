"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import "./carousel-mobile.css";
import { useInView } from "react-intersection-observer";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { imageItem } from "@/lib/types";
import { useTranslations } from "next-intl";

interface CarouselMobileProps {
  images: imageItem[];
}

export const CarouselMobile: React.FC<CarouselMobileProps> = (props) => {
  const { ref: carouselRef, inView } = useInView({ threshold: 0.1 });
  const [api, setApi] = useState<CarouselApi>();
  const t = useTranslations();

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
        id="carousel-mobile-overflow"
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
            <a
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              href={image.referenceUrl as string}
            >
              <CarouselItem>
                <div className="image-container-mobile">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    placeholder={image.placeholder}
                    className="image"
                  />
                  <p className="description-mobile">{t(image.description)}</p>
                </div>
              </CarouselItem>
            </a>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

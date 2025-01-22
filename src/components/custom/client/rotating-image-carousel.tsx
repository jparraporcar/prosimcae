"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./rotating-image-carousel.css";
import { imageItem } from "@/lib/types";
import { useTranslations } from "next-intl";

interface RotatingImageCarouselProps {
  images: imageItem[];
}

export const RotatingImageCarousel = ({
  images,
}: RotatingImageCarouselProps) => {
  const [angle, setAngle] = useState(0);
  const radius = 165; // Adjust radius based on design needs
  const t = useTranslations();

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.02); // Adjust speed as necessary
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      {images.map((image, index) => {
        const theta = (2 * Math.PI * index) / images.length;
        const x = Math.round(radius * Math.cos(theta + angle));
        const y = Math.round(radius * Math.sin(theta + angle));

        return (
          <div
            key={index}
            className="image-wrapper"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="image-container">
              <Image
                src={image.src}
                alt={t(image.alt)}
                width={image.width}
                height={image.height}
                placeholder={image.placeholder}
                className="image"
              />
              <p className="description">{t(image.description)}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

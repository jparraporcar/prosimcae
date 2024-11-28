"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./rotating-image-carousel.css";

interface RotatingImageCarouselProps {
  images: { src: string; alt: string; description: string }[];
}

export const RotatingImageCarousel = ({
  images,
}: RotatingImageCarouselProps) => {
  const [angle, setAngle] = useState(0);
  const radius = 165; // Adjust radius based on design needs

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
                alt={image.alt}
                width={100}
                height={100}
                className="image"
              />
              <p className="description">{image.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import "./rotating-image-carousel.css";

interface RotatingImageCarouselProps {
  images: { src: string; alt: string; description: string }[];
}

export default function RotatingImageCarousel({
  images,
}: RotatingImageCarouselProps) {
  const [angle, setAngle] = useState(0);
  const [radius, setRadius] = useState(220);

  const [screenSize, setScreenSize] = useState("");

  useEffect(() => {
    const setScreenClass = () => {
      const width = window.innerWidth;
      if (width < 767) {
        setScreenSize("max-md");
      } else if (width >= 767 && width < 1279) {
        setScreenSize("max-xl");
      }
    };
    setScreenClass();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => prev + 0.02); // Adjust speed as necessary
    }, 60);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (screenSize === "max-xl") {
      setRadius(250);
    } else if (screenSize === "max-md") {
      setRadius(150);
    }
  }, [screenSize]);

  return (
    <div className="carousel-container">
      {images.map((image, index) => {
        const theta = (2 * Math.PI * index) / images.length;
        const x = radius * Math.cos(theta + angle);
        const y = radius * Math.sin(theta + angle);

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
                width={300}
                height={300}
                className="image"
              />
              <p className="description">{image.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

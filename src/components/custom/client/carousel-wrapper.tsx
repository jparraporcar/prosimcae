"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useMediaQuery } from "react-responsive";
import { imageItem } from "@/lib/types";

interface NavigationWrapperProps {
  images: imageItem[];
}

const CarouselMobile = dynamic(() => import("./carousel-mobile"), {
  ssr: false,
  loading: () => <div style={{ height: 300 }} className="bg-gray-100" />,
});

const RotatingImageCarousel = dynamic(
  () => import("./rotating-image-carousel"),
  {
    ssr: false,
    loading: () => <div style={{ height: 300 }} className="bg-gray-100" />,
  }
);

const CarouselWrapper: React.FC<NavigationWrapperProps> = ({ images }) => {
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      {isSmall ? (
        <CarouselMobile images={images} />
      ) : (
        <RotatingImageCarousel images={images} />
      )}
    </>
  );
};

export default CarouselWrapper;

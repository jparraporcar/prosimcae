"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";

interface VideoItemProps {
  srcs: string[];
  loop: boolean;
  muted: boolean;
  className?: string;
}

export const VideoItem: React.FC<VideoItemProps> = ({
  srcs,
  loop,
  muted,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: intersectionRef, inView } = useInView({ threshold: 0.1 });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (!videoRef.current) return;

    if (inView) {
      videoRef.current.play().catch(() => {
        // Handle autoplay restrictions or errors if needed
      });
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Reset if desired
    }
  }, [inView]);

  useEffect(() => {
    console.log("isSmall:", isSmall);
  }, [isSmall]);

  return (
    <div
      ref={intersectionRef}
      className={cn([
        inView ? "box visible" : "box hidden",
        "flex items-center justify-center",
      ])}
    >
      <video
        ref={videoRef}
        loop={loop}
        muted={muted}
        playsInline
        webkit-playsinline="true"
        className={cn(
          "mx-auto aspect-video rounded-xl object-cover md:w-10/12 mt-4 mb-4 px-4",
          className
        )}
      >
        {isSmall ? (
          <source src={srcs[1]} type="video/mp4" />
        ) : (
          <source src={srcs[0]} type="video/mp4" />
        )}
      </video>
    </div>
  );
};

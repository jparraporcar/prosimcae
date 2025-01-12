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
    if (videoRef.current) {
      videoRef.current.src = isSmall ? srcs[1] : srcs[0];
      videoRef.current.load(); // Load the new source
    }
  }, [isSmall, srcs]);

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
    console.log("srcs", srcs);
  }, [isSmall, srcs]);

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
        {<p>Your browser does not support the video tag.</p>}
      </video>
    </div>
  );
};

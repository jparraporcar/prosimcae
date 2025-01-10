"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface VideoItemProps {
  src: string;
  loop: boolean;
  muted: boolean;
  controls: boolean;
  className?: string;
}

export const VideoItem: React.FC<VideoItemProps> = ({
  src,
  loop,
  muted,
  controls,
  className,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: intersectionRef, inView } = useInView({ threshold: 0.1 });

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

  return (
    <div ref={intersectionRef} className="flex items-center justify-center">
      <video
        ref={videoRef}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        webkit-playsinline="true"
        className={cn(
          "mx-auto aspect-video rounded-xl object-cover md:w-10/12 mt-4 mb-4 px-4",
          className
        )}
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
};

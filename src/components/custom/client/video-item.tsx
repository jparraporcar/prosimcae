"use client";

import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "react-responsive";
import { videoItem } from "@/lib/types";

interface VideoItemProps {
  videoItem: videoItem;
}

export const VideoItem: React.FC<VideoItemProps> = ({ videoItem }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref: intersectionRef, inView } = useInView({ threshold: 0.1 });
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = isSmall ? videoItem.srcs[1] : videoItem.srcs[0];
      videoRef.current.controls = isSmall ? false : true;
      videoRef.current.load();
    }
  }, [isSmall, videoItem.srcs]);

  useEffect(() => {
    if (!videoRef.current) return;

    if (inView) {
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [inView]);

  return (
    <div
      ref={intersectionRef}
      className={cn([
        inView ? "box visible" : "box hidden",
        "flex items-center justify-center",
      ])}
    >
      <video
        preload="none"
        ref={videoRef}
        loop={videoItem.loop}
        muted={videoItem.muted}
        autoPlay={videoItem.autoPlay}
        playsInline
        webkit-playsinline="true"
        className={cn(
          "mx-auto aspect-video rounded-xl object-cover md:w-10/12 mt-4 mb-4 px-4",
          videoItem.className
        )}
      >
        {<p>Your browser does not support the video tag.</p>}
      </video>
    </div>
  );
};

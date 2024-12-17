"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";
import { mediaItem } from "@/lib/types";
import AutoScroll from "embla-carousel-auto-scroll";
import { useEffect, useState } from "react";
import { type CarouselApi } from "@/components/ui/carousel";
import { Button } from "../../ui/button";

interface StudyCaseProps {
  mediaItems: mediaItem[];
}

export const StudyCase: React.FC<StudyCaseProps> = (props) => {
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  const [api, setApi] = useState<CarouselApi>();
  const [isPlaying, setIsPlaying] = useState(true);

  // this useEffect is to be fired when the user clicks the button to start or stop the carousel
  useEffect(() => {
    if (!api) {
      return;
    }
    if (!isPlaying) {
      api.plugins().autoScroll.stop();
    } else {
      api.plugins().autoScroll.play();
    }
  }, [api, isPlaying]);

  // this useEffect is to be fired when the user drags on the carousel and the event stop is emitted
  useEffect(() => {
    api?.on("autoScroll:stop", () => setIsPlaying(false));
  }, [api]);

  return (
    <>
      <Carousel
        opts={{ loop: true }}
        setApi={setApi}
        plugins={[
          AutoScroll({
            playOnInit: true,
          }),
        ]}
      >
        <CarouselContent className="-ml-1">
          {props.mediaItems.map((item, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="flex flex-col items-center mb-2">
                <h1 className="text-center text-lg px-2 pt-2 pb-1 max-md:text-sm">
                  {item.title}
                </h1>
                <div
                  className={cn(["w-56 h-1 border-b border-gray-300 mx-auto"])}
                ></div>
                <div className="w-11/12 text-base max-md:w-full max-md:text-center p-4 max-md:p-1 max-md:text-xs">
                  {item.description}
                </div>

                {item.type === "image" && (
                  <figure className="w-full">
                    <Image
                      alt={item.alt}
                      className={cn([
                        "mx-auto aspect-video rounded-xl object-cover md:w-full mt-4",
                        item.className,
                      ])}
                      height={item.height}
                      src={item.src}
                      width={item.width}
                      style={{ marginBottom: 0 }}
                    />
                  </figure>
                )}
                {item.type === "video" && (
                  <video
                    className={cn([
                      "mx-auto aspect-video rounded-xl object-cover md:w-11/12 mt-4",
                      item.className,
                    ])}
                    autoPlay={item.autoPlay}
                    loop={item.loop}
                    muted={item.muted}
                    controls={item.controls}
                  >
                    <source src={item.src} type="video/mp4" />
                  </video>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex flex-row justify-end">
          <Button
            size="lg"
            onClick={() => setIsPlaying((prevState) => !prevState)}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
            }}
          >
            {isPlaying ? "Stop" : "Start"}
          </Button>
        </div>
      </Carousel>
    </>
  );
};

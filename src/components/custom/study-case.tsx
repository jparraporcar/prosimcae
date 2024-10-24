import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@radix-ui/react-separator";
import "./study-case.css";
import { SeparatorVertical } from "lucide-react";

interface StudyCaseProps {
  images: {
    title: string;
    description: string;
    alt: string;
    height: number;
    src: string;
    width: number;
    className?: string;
  }[];
}

export const StudyCase: React.FC<StudyCaseProps> = (props) => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {props.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col mb-16">
                <h1 className="text-center px-2 pt-2 pb-1">{image.title}</h1>
                <div
                  className={cn(["w-56 h-1 border-b border-gray-300 mx-auto"])}
                ></div>
                <div className="flex flex-row items-center ">
                  <div className="w-1/2 p-4">{image.description}</div>
                  <figure className="w-1/2">
                    <Image
                      alt={image.alt}
                      className={cn([
                        "mx-auto aspect-video rounded-xl object-cover",
                        image.className,
                      ])}
                      height={image.height}
                      src={image.src}
                      width={image.width}
                      style={{ marginBottom: 0 }}
                    />
                  </figure>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size="lg" />
        <CarouselNext size="lg" />
      </Carousel>
    </>
  );
};

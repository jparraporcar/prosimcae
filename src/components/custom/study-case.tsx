import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useMediaQuery } from "react-responsive";

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
  const isSmall = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      <Carousel>
        <CarouselContent className="-ml-1">
          {props.images.map((image, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="flex flex-col items-center mb-16">
                <h1 className="text-center px-2 pt-2 pb-1 max-md:text-sm">
                  {image.title}
                </h1>
                <div
                  className={cn(["w-56 h-1 border-b border-gray-300 mx-auto"])}
                ></div>
                <div className="w-1/2 max-md:w-full max-md:text-center p-4 max-md:p-1 max-md:text-xs">
                  {image.description}
                </div>
                <figure className="w-full">
                  <Image
                    alt={image.alt}
                    className={cn([
                      "mx-auto aspect-video rounded-xl object-cover md:w-full",
                      image.className,
                    ])}
                    height={image.height}
                    src={image.src}
                    width={image.width}
                    style={{ marginBottom: 0 }}
                  />
                </figure>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious size="sm" />
        <CarouselNext size="sm" />
      </Carousel>
    </>
  );
};

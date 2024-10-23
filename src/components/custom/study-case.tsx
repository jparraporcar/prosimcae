import { cn } from "@/lib/utils";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface StudyCaseProps {
  images: {
    title: string;
    description: string;
    alt: string;
    height: number;
    src: string;
    width: number;
    className?: string;
    caption: string;
  }[];
}

export const StudyCase: React.FC<StudyCaseProps> = (props) => {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {props.images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col mb-16 border">
                <h1 className="text-center">{image.title}</h1>
                <div className="flex flex-row">
                  <div className="w-1/2">{image.description}</div>
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
                    />
                    <figcaption className="text-center">
                      {image.caption}
                    </figcaption>
                  </figure>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

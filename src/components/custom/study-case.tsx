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
                <h1 className="text-center p-2">{image.title}</h1>
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

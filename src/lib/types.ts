import { StaticImageData } from "next/image";

export type mediaItem =
  | {
      type: "image";
      title?: string;
      description: string;
      alt: string;
      height?: number;
      width?: number;
      src: string | StaticImageData;
      placeholder?: "blur";
      className?: string;
      caption: string;
    }
  | {
      type: "video";
      title?: string;
      description: string;
      height: number;
      width: number;
      srcs: string[];
      loop: boolean;
      muted: boolean;
      controls: boolean;
      autoPlay: boolean;
      className?: string;
    };

export type imageItem = Extract<mediaItem, { type: "image" }>;
export type videoItem = Extract<mediaItem, { type: "video" }>;

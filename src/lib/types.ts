import { Locale } from "@/i18n/routing";
import { Pathnames } from "next-intl/routing";
import { StaticImageData } from "next/image";

export type mediaItem =
  | {
      type: "image";
      title: string;
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
      title: string;
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

export type DifficultyLevel =
  | "Low difficulty"
  | "Medium difficulty"
  | "High difficulty"
  | "Dificultad baja"
  | "Dificultad media"
  | "Dificultad alta";

export interface BlogEntry {
  slug: any;
  title: string;
  date: string;
  difficulty: DifficultyLevel;
}

export function getDifficultyColor(difficulty: DifficultyLevel): string {
  switch (difficulty) {
    case "Low difficulty":
      return "bg-yellow-200 text-yellow-800";
    case "Dificultad baja":
      return "bg-yellow-200 text-yellow-800";
    case "Medium difficulty":
      return "bg-orange-200 text-orange-800";
    case "Dificultad media":
      return "bg-orange-200 text-orange-800";
    case "High difficulty":
      return "bg-red-200 text-red-800";
    case "Dificultad alta":
      return "bg-red-200 text-red-800";
    default:
      return "bg-gray-200 text-gray-800";
  }
}

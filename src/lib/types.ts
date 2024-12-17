export type mediaItem =
  | {
      type: "image";
      title: string;
      description: string;
      alt: string;
      height: number;
      src: string;
      width: number;
      className?: string;
      caption: string;
    }
  | {
      type: "video";
      title: string;
      description: string;
      src: string;
      autoPlay: boolean;
      loop: boolean;
      muted: boolean;
      controls: boolean;
      className?: string;
    };

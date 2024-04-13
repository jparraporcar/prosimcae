import Image from "next/image";

interface IconProps {
  src: string;
  width: number;
  height: number;
  alt: string;
  className: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <Image
      src={props.src}
      width={props.width}
      height={props.height}
      alt={props.alt}
      className={props.className}
    />
  );
};

Icon.displayName = "Icon";

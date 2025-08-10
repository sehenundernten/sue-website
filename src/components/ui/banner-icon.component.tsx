import Image from "next/image";

interface BannerIconProps {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export function BannerIcon({ src, alt, width, height }: BannerIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className="text-brand-yellow min-w-fit"
    />
  );
}

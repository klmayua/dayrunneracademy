"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface InstitutionalImageProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: "hero" | "video" | "square" | "portrait";
  priority?: boolean;
}

export function InstitutionalImage({
  src,
  alt,
  className,
  aspectRatio = "video",
  priority = false,
}: InstitutionalImageProps) {
  const aspectClasses = {
    hero: "aspect-[16/10]",
    video: "aspect-video",
    square: "aspect-square",
    portrait: "aspect-[3/4]",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl",
        aspectClasses[aspectRatio],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-[rgba(4,19,38,0.35)] pointer-events-none" />
    </div>
  );
}
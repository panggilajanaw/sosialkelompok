"use client";
import { useState } from "react";

type Props = { src: string; alt: string; className?: string; fallbackClassName?: string };
export function FallbackImage({ src, alt, className = "", fallbackClassName = "" }: Props) {
  const [failed, setFailed] = useState(false);
  if (failed) return <div aria-label={alt || "Gambar tidak tersedia"} role="img" className={`image-placeholder ${fallbackClassName}`} />;
  return <img src={src} alt={alt} className={className} onError={() => setFailed(true)} />;
}

"use client";

import { useState } from "react";

type FallbackImageProps = {
  src: string;
  alt: string;
  className: string;
};

/** Client-owned image error handling keeps event handlers out of Server Components. */
export function FallbackImage({ src, alt, className }: FallbackImageProps) {
  const [failed, setFailed] = useState(false);

  return (
    <>
      {failed ? (
        <div
          aria-label={alt || "Gambar belum tersedia"}
          role="img"
          className={`${className} image-placeholder`}
        />
      ) : (
        // These curated local assets are intentionally served from /public.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          className={className}
          onError={() => setFailed(true)}
        />
      )}
    </>
  );
}

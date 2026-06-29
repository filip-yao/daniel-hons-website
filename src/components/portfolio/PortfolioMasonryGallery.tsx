"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";

type GalleryImage = {
  src: string;
  alt: string;
};

type PortfolioMasonryGalleryProps = {
  images: GalleryImage[];
};

export function PortfolioMasonryGallery({ images }: PortfolioMasonryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeImage = useMemo(() => {
    if (activeIndex === null) {
      return null;
    }

    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  const openImage = (index: number) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const showPrevious = useCallback(() => {
    if (activeIndex === null) {
      return;
    }

    const previous = (activeIndex - 1 + images.length) % images.length;
    setActiveIndex(previous);
  }, [activeIndex, images.length]);

  const showNext = useCallback(() => {
    if (activeIndex === null) {
      return;
    }

    const next = (activeIndex + 1) % images.length;
    setActiveIndex(next);
  }, [activeIndex, images.length]);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, showNext, showPrevious]);

  return (
    <>
      <div className="mt-10 columns-1 gap-6 space-y-6 sm:columns-2 xl:columns-3">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => openImage(index)}
            className="group block w-full break-inside-avoid overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 text-left shadow-sm"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                quality={55}
                sizes="(min-width: 1280px) 380px, (min-width: 640px) 46vw, 92vw"
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </button>
        ))}
      </div>

      {activeImage ? (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4 sm:p-8">
          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Zavřít"
            className="absolute right-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-black/60"
          >
            Zavřít
          </button>

          <button
            type="button"
            onClick={showPrevious}
            aria-label="Předchozí"
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-xl text-white transition-colors hover:bg-black/60 sm:left-6"
          >
            ←
          </button>

          <figure className="relative h-[82vh] w-full max-w-6xl overflow-hidden rounded-xl">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              priority
              quality={95}
              sizes="100vw"
              className="object-contain"
            />
          </figure>

          <button
            type="button"
            onClick={showNext}
            aria-label="Další"
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/30 bg-black/40 px-3 py-2 text-xl text-white transition-colors hover:bg-black/60 sm:right-6"
          >
            →
          </button>
        </div>
      ) : null}
    </>
  );
}

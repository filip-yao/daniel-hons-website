"use client";

import { useState } from "react";
import { PortfolioMasonryGallery } from "./PortfolioMasonryGallery";

type GalleryImage = {
  src: string;
  alt: string;
};

type YoutubeEmbed = {
  url: string;
  embed: string;
};

type PortfolioMediaSwitcherProps = {
  images: GalleryImage[];
  youtubeEmbeds: YoutubeEmbed[];
};

export function PortfolioMediaSwitcher({ images, youtubeEmbeds }: PortfolioMediaSwitcherProps) {
  const [activeTab, setActiveTab] = useState<"photos" | "videos">("photos");

  return (
    <section className="section-shell bg-surface-2">
      <div className="site-container">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2 className="text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Galerie
          </h2>

          <div className="inline-flex overflow-hidden rounded-full border border-stone-200 bg-white p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setActiveTab("photos")}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                activeTab === "photos"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-stone-100 hover:text-[#1a1a1a]"
              }`}
            >
              Fotky
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("videos")}
              className={`rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] transition-colors ${
                activeTab === "videos"
                  ? "bg-primary text-white"
                  : "text-gray-600 hover:bg-stone-100 hover:text-[#1a1a1a]"
              }`}
            >
              Videa
            </button>
          </div>
        </div>

        {activeTab === "photos" ? (
          images.length === 0 ? (
            <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-gray-600 shadow-sm">
              Ve složce /public/photos/galerie zatím nejsou žádné fotky.
            </div>
          ) : (
            <PortfolioMasonryGallery images={images} />
          )
        ) : youtubeEmbeds.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-stone-200 bg-white p-6 text-gray-600 shadow-sm">
            Není vložené žádné YouTube video.
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {youtubeEmbeds.map((video) => (
              <article
                key={video.url}
                className="overflow-hidden rounded-2xl border border-stone-200 bg-white p-3 shadow-sm"
              >
                <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
                  <iframe
                    src={video.embed}
                    title="YouTube video"
                    className="h-full w-full"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

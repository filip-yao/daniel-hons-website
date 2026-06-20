"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type GalleryCategory = "Vše" | "Obývací pokoj" | "Kuchyň" | "Ložnice" | "Jídelna" | "AI vizualizace";

type GalleryItem = {
  category: Exclude<GalleryCategory, "Vše">;
  title: string;
  image: string;
  alt: string;
};

const categories: GalleryCategory[] = ["Vše", "Obývací pokoj", "Kuchyň", "Ložnice", "Jídelna", "AI vizualizace"];

const galleryItems: GalleryItem[] = [
  {
    category: "Obývací pokoj",
    title: "Obývací pokoj",
    image: "https://danhons.cz/fotky/portfolio-1.jpg",
    alt: "Obývací pokoj s krbem - fotografie nemovitosti",
  },
  {
    category: "Kuchyň",
    title: "Kuchyň",
    image: "https://danhons.cz/fotky/portfolio-2.jpg",
    alt: "Kuchyň s ostrovem - fotografie nemovitosti",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "https://danhons.cz/fotky/portfolio-3.jpg",
    alt: "Ložnice AI vizualizace - virtual staging",
  },
  {
    category: "Ložnice",
    title: "Ložnice",
    image: "https://danhons.cz/fotky/portfolio-4.jpg",
    alt: "Ložnice - fotografie nemovitosti",
  },
  {
    category: "Jídelna",
    title: "Jídelna",
    image: "https://danhons.cz/fotky/portfolio-5.jpg",
    alt: "Jídelna s kuchyní - fotografie nemovitosti",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "https://danhons.cz/fotky/portfolio-6.jpg",
    alt: "Po — AI vizualizace ložnice",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "https://danhons.cz/fotky/portfolio-7.jpg",
    alt: "Před — prázdná ložnice",
  },
];

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("Vše");

  const items = useMemo(() => {
    if (activeCategory === "Vše") {
      return galleryItems;
    }

    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="galerie" className="section-shell bg-bg">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Galerie podle kategorií
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Galerie podle kategorií
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
            Prohlédněte si ukázky obývacího pokoje, kuchyně, ložnice, jídelny i AI vizualizací.
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-3">
          {categories.map((category) => {
            const isActive = category === activeCategory;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`sharp-button border px-4 py-2 text-sm uppercase tracking-[0.18em] transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-bg"
                    : "border-border bg-surface text-text-muted hover:border-primary/60 hover:text-text"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.image}-${index}`}
              className="group overflow-hidden border border-border bg-surface sharp-card transition-transform duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-bg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0)_35%,rgba(12,12,12,0.75)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="w-fit max-w-full border border-border bg-bg px-3 py-2.5 shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 text-[0.82rem] uppercase tracking-[0.2em] text-primary">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
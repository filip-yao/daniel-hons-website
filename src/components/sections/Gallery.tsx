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
    image: "/photos/puvodni/portfolio-1.jpg",
    alt: "Obývací pokoj s krbem - fotografie nemovitosti",
  },
  {
    category: "Kuchyň",
    title: "Kuchyň",
    image: "/photos/puvodni/portfolio-2.jpg",
    alt: "Kuchyň s ostrovem - fotografie nemovitosti",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "/photos/puvodni/portfolio-3.jpg",
    alt: "Ložnice AI vizualizace - virtual staging",
  },
  {
    category: "Ložnice",
    title: "Ložnice",
    image: "/photos/puvodni/portfolio-4.jpg",
    alt: "Ložnice - fotografie nemovitosti",
  },
  {
    category: "Jídelna",
    title: "Jídelna",
    image: "/photos/puvodni/portfolio-5.jpg",
    alt: "Jídelna s kuchyní - fotografie nemovitosti",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "/photos/puvodni/portfolio-6.jpg",
    alt: "Po — AI vizualizace ložnice",
  },
  {
    category: "AI vizualizace",
    title: "AI vizualizace",
    image: "/photos/puvodni/portfolio-7.jpg",
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
    <section id="galerie" className="section-shell bg-surface-2">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Galerie podle kategorií
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Galerie podle kategorií
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
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
                    : "border-stone-200 bg-white text-gray-600 hover:border-primary/50 hover:text-[#1a1a1a]"
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
              className="group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-bg">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_54%,rgba(255,255,255,0.12)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="w-fit max-w-full rounded-xl border border-stone-200 bg-white/90 px-3 py-2.5 shadow-sm">
                    <p className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary">
                      {item.category}
                    </p>
                    <h3 className="mt-1.5 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-[#1a1a1a]">
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
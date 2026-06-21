"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

const portfolioItems = [
  {
    title: "OBÝVACÍ POKOJ",
    note: "Obývací pokoj s krbem",
    image: "https://danhons.cz/fotky/portfolio-1.jpg",
    alt: "Obývací pokoj s krbem - fotografie nemovitosti",
  },
  {
    title: "KUCHYŇ",
    note: "Kuchyň s ostrovem",
    image: "https://danhons.cz/fotky/portfolio-2.jpg",
    alt: "Kuchyň s ostrovem - fotografie nemovitosti",
  },
  {
    title: "AI VIZUALIZACE",
    note: "Ložnice virtual staging",
    image: "https://danhons.cz/fotky/portfolio-3.jpg",
    alt: "Ložnice AI vizualizace - virtual staging",
  },
  {
    title: "LOŽNICE",
    note: "Ložnice",
    image: "https://danhons.cz/fotky/portfolio-4.jpg",
    alt: "Ložnice - fotografie nemovitosti",
  },
  {
    title: "JÍDELNA",
    note: "Jídelna s kuchyní",
    image: "https://danhons.cz/fotky/portfolio-5.jpg",
    alt: "Jídelna s kuchyní - fotografie nemovitosti",
  },
  {
    title: "AI VIZUALIZACE",
    note: "Prázdný pokoj → zařízený interiér",
    image: "https://danhons.cz/fotky/portfolio-6.jpg",
    alt: "Po AI vizualizace ložnice",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section-shell bg-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Vybrané realizace
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Vybrané realizace
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Ukázka reálné práce, fotografie a AI vizualizace z dokončené zakázky.
          </p>
        </motion.div>

        <div className="mt-12 columns-1 gap-6 space-y-6 md:columns-2 xl:columns-3">
          {portfolioItems.map((item, index) => (
            <motion.article
              key={`${item.title}-${item.note}-${index}`}
              className="group break-inside-avoid overflow-hidden rounded-2xl border border-stone-200 bg-white p-4 shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
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
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_50%,rgba(255,255,255,0.12)_100%)]" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <div className="w-fit max-w-full rounded-xl border border-stone-200 bg-white/90 px-3 py-2.5 shadow-sm">
                    <span className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-primary">
                      Portfolio
                    </span>
                    <h3 className="mt-1.5 text-[0.82rem] font-medium uppercase tracking-[0.16em] text-[#1a1a1a]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[0.68rem] text-gray-500">{item.note}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10">
          <ButtonLink href="#galerie" variant="ghost">
            Zobrazit celé portfolio →
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}

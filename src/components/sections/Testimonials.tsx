"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export function Testimonials() {
  const [sliderValue, setSliderValue] = useState(55);

  return (
    <section className="section-shell bg-surface-2">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Prázdný pokoj → zařízený interiér
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Prázdný pokoj → zařízený interiér
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
            Pomocí AI dokážeme prázdnou místnost proměnit ve stylový interiér, bez fyzického
            nábytku a nákladů na home staging.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <motion.div
            className="border border-border bg-surface p-4 sharp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] overflow-hidden border border-border bg-bg sm:aspect-[16/10]">
              <Image
                src="https://danhons.cz/fotky/portfolio-7.jpg"
                alt="Před — prázdná ložnice"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-top"
              />

              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderValue}% 0 0)` }}
              >
                <Image
                  src="https://danhons.cz/fotky/portfolio-6.jpg"
                  alt="Po — AI vizualizace ložnice"
                  fill
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0)_65%,rgba(12,12,12,0.55)_100%)]" />

              <div
                className="absolute inset-y-0 w-px bg-primary"
                style={{ left: `${sliderValue}%` }}
              >
                <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-border bg-bg shadow-[0_10px_24px_rgba(0,0,0,0.28)]">
                  <div className="flex h-full items-center justify-center text-primary">
                    <span className="text-sm">↔</span>
                  </div>
                </div>
              </div>

              <div className="absolute left-4 top-4 border border-border bg-bg px-3 py-2 text-[0.65rem] font-mono uppercase tracking-[0.24em] text-primary shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                PŘED / PO
              </div>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between px-4 pb-4">
                <span className="border border-border bg-bg px-3 py-2 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-primary shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                  PŘED
                </span>
                <span className="border border-border bg-bg px-3 py-2 text-[0.65rem] font-mono uppercase tracking-[0.2em] text-primary shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                  PO
                </span>
              </div>

              <input
                className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
                type="range"
                min="0"
                max="100"
                value={sliderValue}
                onChange={(event) => setSliderValue(Number(event.target.value))}
                aria-label="Táhněte slider pro porovnání před a po"
              />
            </div>
          </motion.div>

          <motion.aside
            className="border border-border bg-surface p-6 sharp-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">AI virtuální staging</p>
            <h3 className="mt-4 font-inter text-lg font-semibold uppercase tracking-wider text-text">
              Prázdný pokoj → zařízený interiér
            </h3>
            <p className="mt-4 text-sm leading-7 text-text-muted">
              Pomocí AI dokážeme prázdnou místnost proměnit ve stylový interiér, bez fyzického
              nábytku a nákladů na home staging.
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.18em] text-text-muted">
              Táhněte slider pro porovnání
            </p>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

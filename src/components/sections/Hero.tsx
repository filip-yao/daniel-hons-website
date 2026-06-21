"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
};

export function Hero() {
  return (
    <section id="top" className="bg-bg pt-16">
      <div className="grid min-h-[90vh] lg:grid-cols-[1fr_1fr]">
        <motion.div
          className="relative flex min-h-[24rem] items-center justify-center overflow-hidden border-b border-stone-200 bg-stone-50 px-6 py-10 lg:min-h-[90vh] lg:border-b-0 lg:border-r"
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -left-10 top-10 h-32 w-32 rounded-full bg-primary/12 blur-2xl" />
          <div className="pointer-events-none absolute bottom-16 right-4 h-28 w-28 rounded-full border border-primary/25" />

          <div className="relative rounded-full border border-primary/30 p-3">
            <div className="relative h-64 w-64 overflow-hidden rounded-full border-8 border-white shadow-sm sm:h-72 sm:w-72 lg:h-[25rem] lg:w-[25rem]">
              <Image
                src="/photos/danielhons.png"
                alt="Daniel Hons, realitní fotograf"
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 70vw"
                className="object-cover object-top"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex items-center bg-surface px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              Fotograf nemovitostí · Vysočina & Brno
            </p>

            <h1 className="mt-6 max-w-xl text-5xl font-medium leading-[0.95] tracking-tight text-[#1a1a1a] lg:text-7xl">
              Fotografie, které
              <span className="block text-primary">prodávají nemovitosti.</span>
            </h1>

            <div className="mt-6 h-1.5 w-24 rounded-full bg-primary/80" />

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 sm:text-[1.08rem]">
              Nemovitosti s profesionální fotografií se prodávají rychleji a za lepší cenu.
              Dron v ceně každého balíčku. Fotky do 48 h, video do 72 h. Pokrývám celou Vysočinu
              a Brno.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <ButtonLink href="#kontakt" variant="primary">
                Nezávazná poptávka
              </ButtonLink>
              <ButtonLink href="#sluzby" variant="secondary">
                Moje služby
              </ButtonLink>
            </div>

            <div className="mt-10 grid gap-4 border-y border-stone-200 bg-stone-50/70 py-6 text-sm text-gray-500 sm:grid-cols-3">
              <div>
                <p className="font-light text-4xl tracking-tight text-primary/80">48h</p>
                <p>Dodání fotografií</p>
              </div>
              <div>
                <p className="font-light text-4xl tracking-tight text-primary/80">72h</p>
                <p>Dodání videa</p>
              </div>
              <div>
                <p className="font-light text-4xl tracking-tight text-primary/80">∞</p>
                <p>Dron vždy v ceně</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

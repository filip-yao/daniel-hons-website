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
    <section id="top" className="pt-20">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1fr]">
        <motion.div
          className="relative min-h-[42rem] overflow-hidden border-b border-border lg:min-h-screen lg:border-b-0 lg:border-r"
          initial="hidden"
          animate="visible"
          variants={fadeRight}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/photos/danielhons.png"
            alt="Daniel Hons, realitní fotograf"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,156,88,0.18),transparent_35%),linear-gradient(180deg,rgba(12,12,12,0.18),rgba(12,12,12,0.12))]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,12,12,0.0)_0%,rgba(12,12,12,0.58)_100%)]" />
          <div className="absolute inset-0 border border-border/60" />

          <div className="relative flex h-full min-h-[42rem] items-end p-6 sm:p-10 lg:min-h-screen lg:p-12">
            
          </div>
        </motion.div>

        <div className="flex items-center bg-bg px-4 py-14 sm:px-6 lg:px-12 lg:py-24">
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
              Fotograf nemovitostí · Vysočina & Brno
            </p>

            <h1 className="mt-6 max-w-xl font-playfair text-[clamp(3rem,7vw,4.5rem)] italic leading-[0.92] tracking-tight text-text">
              Fotografie, které
              <span className="block text-primary">prodávají nemovitosti.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-text-muted sm:text-[1.08rem]">
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

            <div className="mt-8 grid gap-3 border-t border-border pt-6 text-sm text-text-muted sm:grid-cols-3">
              <div>
                <p className="font-mono text-2xl text-primary">48h</p>
                <p>Dodání fotografií</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-primary">72h</p>
                <p>Dodání videa</p>
              </div>
              <div>
                <p className="font-mono text-2xl text-primary">∞</p>
                <p>Dron vždy v ceně</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

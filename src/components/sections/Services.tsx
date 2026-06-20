"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

const services = [
  {
    number: "01",
    title: "Fotografie nemovitostí",
    image: "https://danhons.cz/fotky/portfolio-1.jpg",
    alt: "Obývací pokoj s krbem - fotografie nemovitosti",
    description:
      "Nemovitost vidíte vy, kupci vidí jen fotku. HDR fotografie s dronem, perfektní kompozice a nasvícení. Fotky, které prodávají nemovitost ještě před první prohlídkou.",
    price: "od 2 490 Kč",
    badge: "Dron v ceně",
  },
  {
    number: "02",
    title: "Video & Dron",
    image: "https://danhons.cz/fotky/portfolio-2.jpg",
    alt: "Kuchyň s ostrovem - fotografie nemovitosti",
    description:
      "Video prodává emoce. Prezentační video s leteckými záběry, profesionálním střihem a hudbou. Formáty pro Sreality, Instagram i YouTube. Hotovo do 72 hodin.",
    price: "od 3 790 Kč",
    badge: "Dodání do 72 h",
  },
  {
    number: "03",
    title: "AI Virtuální Staging",
    image: "https://danhons.cz/fotky/portfolio-6.jpg",
    alt: "Po AI vizualizace ložnice",
    description:
      "Prázdný byt se prodává špatně. AI staging ukáže, jak místnost vypadá zařízená, bez stěhování nábytku, bez čekání. Kupec vidí domov, ne prázdné zdi.",
    price: "od 300 Kč / místnost",
    badge: "Rychlé řešení",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="section-shell bg-bg">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Služby na míru
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Služby na míru
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-text-muted">
            Od fotografie nemovitostí přes firemní video až po AI vizualizace, vše pod jednou
            střechou.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="group card-shell sharp-card flex h-full flex-col p-6 transition-transform duration-300 hover:-translate-y-1 hover:border-primary/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border border-border bg-bg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(12,12,12,0)_45%,rgba(12,12,12,0.7)_100%)]" />
                <div className="absolute left-3 top-3 flex flex-col gap-2">
                  <div className="inline-flex w-fit border border-border bg-bg px-2.5 py-1.5 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-primary shadow-[0_10px_24px_rgba(0,0,0,0.22)]">
                    {service.badge}
                  </div>
                </div>
              </div>

              <h3 className="mt-6 font-inter text-lg font-semibold uppercase tracking-wider text-text">
                {service.title}
              </h3>

              <p className="mt-4 flex-1 text-sm leading-7 text-text-muted">{service.description}</p>

              <div className="mt-6 border-t border-border pt-5">
                <div className="font-mono text-2xl text-text">{service.price}</div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="#kontakt" variant="primary">
            Nezávazně poptat
          </ButtonLink>
          <p className="text-sm text-text-muted">
            Dron je v ceně fotografií. Fotky do 48 h, video do 72 h.
          </p>
        </div>
      </div>
    </section>
  );
}
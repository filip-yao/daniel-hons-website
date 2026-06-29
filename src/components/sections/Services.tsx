"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

const services = [
  {
    number: "01",
    title: "Fotografie nemovitostí",
    image: "/photos/puvodni/portfolio-1.jpg",
    alt: "Obývací pokoj s krbem - fotografie nemovitosti",
    description:
      "Nemovitost vidíte vy, kupci vidí jen fotku. HDR fotografie s dronem, perfektní kompozice a nasvícení. Fotky, které prodávají nemovitost ještě před první prohlídkou.",
    price: "od 2 490 Kč",
    badge: "Dron v ceně",
  },
  {
    number: "02",
    title: "Video & Dron",
    image: "/photos/puvodni/portfolio-2.jpg",
    alt: "Kuchyň s ostrovem - fotografie nemovitosti",
    description:
      "Video prodává emoce. Prezentační video s leteckými záběry, profesionálním střihem a hudbou. Formáty pro Sreality, Instagram i YouTube. Hotovo do 72 hodin.",
    price: "od 3 790 Kč",
    badge: "Dodání do 72 h",
  },
  {
    number: "03",
    title: "AI Virtuální Staging",
    image: "/photos/puvodni/portfolio-6.jpg",
    alt: "Po AI vizualizace ložnice",
    description:
      "Prázdný byt se prodává špatně. AI staging ukáže, jak místnost vypadá zařízená, bez stěhování nábytku, bez čekání. Kupec vidí domov, ne prázdné zdi.",
    price: "od 300 Kč / místnost",
    badge: "Rychlé řešení",
  },
];

export function Services() {
  return (
    <section id="sluzby" className="section-shell bg-surface">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Služby na míru
          </p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Služby na míru
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-gray-600">
            Od fotografie nemovitostí přes firemní video až po AI vizualizace, vše pod jednou
            střechou.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {services.map((service) => (
            <motion.article
              key={service.title}
              className="group card-shell sharp-card flex h-full flex-col overflow-hidden transition-colors duration-300 hover:border-primary/40"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-bg">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(min-width: 1280px) 33vw, 100vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_56%,rgba(255,255,255,0.12)_100%)]" />
                <div className="absolute left-3 top-3 flex flex-col gap-2">
                  <div className="inline-flex w-fit rounded-full border border-stone-200 bg-white/90 px-2.5 py-1.5 text-[0.65rem] font-mono uppercase tracking-[0.18em] text-primary shadow-sm">
                    {service.badge}
                  </div>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-medium uppercase tracking-[0.12em] text-[#1a1a1a]">
                  {service.title}
                </h3>

                <p className="mt-4 flex-1 text-base leading-8 text-gray-600">{service.description}</p>

                <div className="mt-6 border-t border-stone-200 pt-5">
                  <div className="text-2xl font-semibold text-primary">{service.price}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <ButtonLink href="#kontakt" variant="primary">
            Nezávazně poptat
          </ButtonLink>
          <p className="text-sm text-gray-500">
            Dron je v ceně fotografií. Fotky do 48 h, video do 72 h.
          </p>
        </div>
      </div>
    </section>
  );
}
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="section-shell bg-surface">
      <div className="site-container">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Proč Daniel Hons</p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Jiní fotí. Já prodávám.
          </h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-text-muted">
            <p>
              Tři věci, které u jiných fotografů nemovitostí na Vysočině nenajdete.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Dron vždy v ceně",
                text: "Letecké záběry jsou součástí každého balíčku bez příplatku. U konkurence stojí dron navíc 1 000–3 000 Kč. U mě ne.",
              },
              {
                title: "Místní, ne vzdálený",
                text: "Pokrývám celou Vysočinu a Brno. Znám lokalitu, orientuji se rychle. Nejsem fotograf, který přijede z Prahy a neví, kde zaparkovat.",
              },
              {
                title: "Foto + video + AI pod jednou střechou",
                text: "Jeden kontakt, jedna faktura. Fotografie, video, dron i AI vizualizace, vše zajistím já. Makléři oceňují jednoduchost procesu.",
              },
            ].map((item) => (
              <article key={item.title} className="border border-border bg-bg p-6 sharp-card">
                <h3 className="font-inter text-lg font-semibold uppercase tracking-wider text-text">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-text-muted">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden border border-border bg-bg">
              <Image
                src="https://danhons.cz/fotky/portfolio-4.jpg"
                alt="Ložnice - fotografie nemovitosti"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="relative aspect-square overflow-hidden border border-border bg-bg">
                <Image
                  src="https://danhons.cz/fotky/portfolio-6.jpg"
                  alt="Po AI vizualizace ložnice"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="relative aspect-square overflow-hidden border border-border bg-bg">
                <Image
                  src="https://danhons.cz/fotky/portfolio-7.jpg"
                  alt="Před prázdná ložnice"
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
            </div>
          </div>

          <p className="mt-8 font-mono text-sm text-text-muted">
            48h Rychlost jako slib · Fotografie do 48 hodin, video do 72 hodin od natáčení
          </p>
        </motion.div>
      </div>
    </section>
  );
}

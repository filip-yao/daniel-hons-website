"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function About() {
  return (
    <section className="section-shell bg-surface">
      <div className="site-container">
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-center font-mono text-xs uppercase tracking-[0.3em] text-primary">Proč Daniel Hons</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Jiní fotí. Já prodávám.
          </h2>

          <div className="mx-auto mt-6 max-w-3xl space-y-6 text-center text-base leading-8 text-gray-600">
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
              <article key={item.title} className="card-shell sharp-card rounded-2xl bg-white p-6">
                <h3 className="text-xl font-medium uppercase tracking-[0.12em] text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="relative aspect-square overflow-hidden rounded-xl border border-stone-200 bg-bg">
              <Image
                src="https://danhons.cz/fotky/portfolio-4.jpg"
                alt="Ložnice - fotografie nemovitosti"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-stone-200 bg-bg">
              <Image
                src="https://danhons.cz/fotky/portfolio-6.jpg"
                alt="Po AI vizualizace ložnice"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-xl border border-stone-200 bg-bg">
              <Image
                src="https://danhons.cz/fotky/portfolio-7.jpg"
                alt="Před prázdná ložnice"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </div>

          <p className="mt-8 font-mono text-sm text-gray-500">
            48h Rychlost jako slib · Fotografie do 48 hodin, video do 72 hodin od natáčení
          </p>
        </motion.div>
      </div>
    </section>
  );
}

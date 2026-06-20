"use client";

import { motion } from "framer-motion";

const vysocina = [
  "Jihlava",
  "Havlíčkův Brod",
  "Žďár nad Sázavou",
  "Třebíč",
  "Pelhřimov",
  "Humpolec a okolí",
];

const jihomoravsky = [
  "Brno & okolí",
  "Brno",
  "Brno-venkov",
  "Blansko",
  "Vyškov",
  "Znojmo",
  "Břeclav",
];

export function WhyHdr() {
  return (
    <section className="section-shell bg-surface">
      <div className="site-container grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Vysočina & Brno
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Vysočina & Brno
          </h2>

          <div className="mt-8 space-y-6 text-base leading-8 text-text-muted">
            <p>
              Lokální fotograf s dokonalou znalostí regionu. Dojíždím bez příplatků za vzdálenost v
              rámci pokrytých oblastí.
            </p>
            <p>
              Primárně působím na Vysočině a v Jihomoravském kraji. Znám trh, lokalitu i to, jak
              pracovat rychle a efektivně na místě.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { title: "Kraj Vysočina", items: vysocina },
            { title: "Jihomoravský kraj", items: jihomoravsky },
          ].map((item) => (
            <div key={item.title} className="border border-border bg-bg p-6 sharp-card">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">{item.title}</p>
              <div className="mt-5 border border-dashed border-border bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.015))] p-5 text-sm leading-7 text-text-muted">
                <ul className="space-y-2">
                  {item.items.map((location) => (
                    <li key={location}>{location}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

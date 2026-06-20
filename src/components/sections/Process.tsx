"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Poptávka",
    text: "Napište nebo zavolejte. Domluvíme termín a upřesníme požadavky na míru vaší nemovitosti.",
  },
  {
    number: "02",
    title: "Natáčení",
    text: "Přijedu vybaven vším potřebným včetně dronu. Natáčení bytu trvá obvykle 1–2 hodiny.",
  },
  {
    number: "03",
    title: "Postprodukce",
    text: "Editace, HDR retušování, střih videa a případné AI vizualizace. Vše v jednom balíčku.",
  },
  {
    number: "04",
    title: "Dodání",
    text: "Fotografie do 48 h, video do 72 h. Soubory ve vysokém rozlišení přes odkaz ke stažení.",
  },
];

export function Process() {
  return (
    <section id="sluzby" className="section-shell bg-bg">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">Jak to funguje</p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Proces spolupráce
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-primary/40 lg:block" />
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-10">
            {steps.map((step) => (
              <motion.article
                key={step.number}
                className="relative border border-border bg-surface p-6 sharp-card"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 inline-flex h-20 w-20 items-center justify-center border border-primary/40 bg-bg font-mono text-3xl text-primary">
                  {step.number}
                </div>
                <h3 className="mt-6 font-inter text-lg font-semibold uppercase tracking-wider text-text">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-text-muted">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

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
    <section id="sluzby" className="section-shell bg-surface-2">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Jak to funguje</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Proces spolupráce
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[3.25rem] hidden h-px bg-stone-200 lg:block" />
          <div className="grid gap-8 lg:grid-cols-4 lg:gap-12">
            {steps.map((step) => (
              <motion.article
                key={step.number}
                className="relative rounded-2xl border border-stone-200 bg-white p-7 shadow-sm"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative z-10 inline-flex h-20 w-20 items-center justify-center rounded-full border border-primary/20 bg-primary/5 font-mono text-4xl font-light text-primary/35">
                  {step.number}
                </div>
                <h3 className="mt-6 text-xl font-medium uppercase tracking-[0.12em] text-[#1a1a1a]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-sm text-base leading-8 text-gray-600">{step.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

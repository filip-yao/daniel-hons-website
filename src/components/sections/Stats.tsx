"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "48h", label: "Dodání fotografií" },
  { value: "72h", label: "Dodání videa" },
  { value: "∞", label: "Dron vždy v ceně" },
  { value: "AI", label: "Virtuální staging" },
];

export function Stats() {
  return (
    <section className="section-shell bg-surface">
      <div className="site-container">
        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="border border-border bg-surface-2 p-8 text-center sharp-card"
            >
              <div className="font-mono text-5xl text-primary">{stat.value}</div>
              <p className="mt-4 text-sm uppercase tracking-[0.28em] text-text-muted">{stat.label}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

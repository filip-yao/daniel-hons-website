"use client";

import { motion } from "framer-motion";
import { PricingCard } from "../ui/PricingCard";

const plans = [
  {
    title: "Základní",
    price: "od 2 900 Kč",
    description: "Do 60 m², 15 fotografií, dodání 48h",
    features: ["Do 60 m²", "15 fotografií", "Dodání do 48 h"],
  },
  {
    title: "Profesionál",
    price: "od 4 900 Kč",
    description: "Do 120 m², 25 fotografií, 24h dodání, půdorys",
    features: ["Do 120 m²", "25 fotografií", "24h dodání", "Půdorys v ceně"],
    featured: true,
    badge: "Nejoblíbenější",
  },
  {
    title: "Prémiový",
    price: "od 7 900 Kč",
    description: "Neomezená plocha, 40+ fotografií, drone, video",
    features: ["Neomezená plocha", "40+ fotografií", "Drone", "Video"],
  },
];

export function Pricing() {
  return (
    <section id="cena" className="section-shell bg-bg">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-primary">
            Transparentní ceník
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-[clamp(2.25rem,5vw,2.75rem)] italic leading-[1.02] text-text">
            Transparentní ceník
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} {...plan} />
          ))}
        </div>

        <p className="mt-8 max-w-3xl text-sm leading-7 text-text-muted">
          *Cena závisí na lokalitě a velikosti nemovitosti. Doprava nad 30 km od Prahy zpoplatněna.
        </p>
      </div>
    </section>
  );
}

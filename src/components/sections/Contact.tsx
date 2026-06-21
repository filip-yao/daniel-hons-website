"use client";

import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const service = String(formData.get("service") ?? "").trim();
    const location = String(formData.get("location") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const subject = encodeURIComponent("Poptávka z webu danielhons.cz");
    const body = encodeURIComponent(
      [
        `Jméno: ${name}`,
        `E-mail: ${email}`,
        `Telefon: ${phone}`,
        `Služba: ${service}`,
        `Lokalita: ${location}`,
        "",
        "Zpráva:",
        message,
      ].join("\n"),
    );

    window.location.href = `mailto:danhons@icloud.com?subject=${subject}&body=${body}`;
  }

  return (
    <section id="kontakt" className="section-shell relative overflow-hidden bg-surface-2 text-[#1a1a1a]">
      <div className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Kontakt</p>
          <h2 className="mt-4 max-w-4xl text-3xl font-medium leading-tight tracking-tight text-[#1a1a1a] lg:text-4xl">
            Připraveni ukázat nemovitost v tom nejlepším světle?
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Napište nebo zavolejte. Odpovím do 24 hodin.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="mailto:danhons@icloud.com" variant="primary">
              Napsat e-mail
            </ButtonLink>
            <ButtonLink href="tel:+420725657147" variant="primary">
              Zavolat
            </ButtonLink>
          </div>

          <div className="mt-12 overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm">
            <form className="grid gap-6 p-6 sm:p-9" onSubmit={handleSubmit}>
              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                  Jméno a příjmení
                  <input
                    name="name"
                    type="text"
                    required
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="Vaše jméno"
                  />
                </label>
                <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                  E-mail
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="vas@email.cz"
                  />
                </label>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                  Telefon
                  <input
                    name="phone"
                    type="tel"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    placeholder="+420 ..."
                  />
                </label>
                <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                  Služba
                  <select
                    name="service"
                    className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    defaultValue="Fotografie nemovitostí"
                  >
                    <option>Fotografie nemovitostí</option>
                    <option>Video & Dron</option>
                    <option>AI Virtuální Staging</option>
                  </select>
                </label>
              </div>

              <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                Lokalita nemovitosti
                <input
                  name="location"
                  type="text"
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Jihlava, Brno, ..."
                />
              </label>

              <label className="grid gap-2 text-sm uppercase tracking-[0.18em] text-gray-500">
                Zpráva
                <textarea
                  name="message"
                  required
                  rows={5}
                  className="w-full rounded-xl border border-stone-200 bg-stone-50 px-4 py-3 text-base text-[#1a1a1a] placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Stručně popište nemovitost a termín focení"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-gray-500">Odeslání otevře váš e-mailový klient s předvyplněnou poptávkou.</p>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary bg-primary px-5 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  Odeslat poptávku
                </button>
              </div>
            </form>
            <div className="h-8 bg-primary/15 border-t border-primary/20" />
          </div>

          <div className="mt-10 grid gap-4 text-sm text-gray-500 sm:grid-cols-3">
            <p>📧 danhons@icloud.com</p>
            <p>📞 +420 725 657 147</p>
            <p>📍 Vysočina & Brno</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

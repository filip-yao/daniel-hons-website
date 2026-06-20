"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "./ui/Button";

const links = [
  { label: "Domů", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Galerie", href: "#galerie" },
  { label: "Služby & Ceník", href: "#sluzby" },
  { label: "Kontakt", href: "#kontakt" },
];

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "border-b border-border/70 bg-surface/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="site-container">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="#top"
            className="font-playfair text-2xl italic tracking-tight text-primary transition-opacity hover:opacity-90"
          >
            Daniel Hons
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="#kontakt" variant="secondary">
              Nezávazná poptávka
            </ButtonLink>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-border bg-surface text-text lg:hidden"
            aria-expanded={menuOpen}
            aria-label="Otevřít menu"
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span className="sr-only">Otevřít menu</span>
            <span className="flex flex-col gap-1.5">
              <span className="h-px w-5 bg-current" />
              <span className="h-px w-5 bg-current" />
            </span>
          </button>
        </div>

        {menuOpen ? (
          <div className="border-t border-border/70 bg-surface/95 px-4 py-5 backdrop-blur-xl lg:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.18em] text-text-muted transition-colors hover:text-text"
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink href="#kontakt" variant="secondary" className="mt-2 w-fit">
                Nezávazná poptávka
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

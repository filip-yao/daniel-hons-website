"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ButtonLink } from "./ui/Button";

const links = [
  { label: "Domů", href: "/#top" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Galerie", href: "/portfolio" },
  { label: "Služby & Ceník", href: "/#sluzby" },
  { label: "Kontakt", href: "/#kontakt" },
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
        isScrolled ? "border-b border-stone-200 bg-white/90 shadow-sm backdrop-blur-md" : "border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <div className="site-container">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="font-playfair text-2xl italic tracking-tight text-[#1a1a1a] transition-opacity hover:opacity-90"
          >
            Daniel <span className="text-primary">Hons</span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.16em] text-gray-600 transition-colors hover:text-[#1a1a1a]"
              >
                {link.label}
              </Link>
            ))}
            <ButtonLink href="/#kontakt" variant="primary">
              Nezávazná poptávka
            </ButtonLink>
          </nav>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-stone-200 bg-white text-[#1a1a1a] shadow-sm lg:hidden"
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
          <div className="border-t border-stone-200 bg-white/95 px-4 py-5 shadow-sm backdrop-blur-md lg:hidden">
            <nav className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm uppercase tracking-[0.16em] text-gray-600 transition-colors hover:text-[#1a1a1a]"
                >
                  {link.label}
                </Link>
              ))}
              <ButtonLink href="/#kontakt" variant="primary" className="mt-2 w-fit">
                Nezávazná poptávka
              </ButtonLink>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

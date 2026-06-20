import Link from "next/link";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M16.5 7.5h.01" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M7 9.5V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M7 6.5h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M11 17v-4.2c0-1.8 1-3 2.7-3s2.7 1.2 2.7 3V17"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M11 11v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-bg py-8 text-text-muted">
      <div className="site-container">
        <div className="h-px w-full bg-light-divider opacity-90" />
        <div className="flex flex-col gap-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <Link href="#top" className="font-playfair text-xl italic text-primary">
            Daniel Hons
          </Link>

          <p className="text-sm uppercase tracking-[0.18em] text-text-muted">
            © 2026 Daniel Hons. Všechna práva vyhrazena.
          </p>

          <div className="flex items-center gap-4 text-text">
            <a
              href="https://instagram.com/dan_hons"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-primary"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <p className="pb-6 text-sm leading-7 text-text-muted">
          Profesionální fotografie a video nemovitostí. Vysočina & Brno. Dron v ceně, dodání do 48 h.
        </p>
      </div>
    </footer>
  );
}
